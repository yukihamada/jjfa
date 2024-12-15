import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Users } from "lucide-react";

interface AuthUser {
  id: string;
  email?: string;
  user_metadata: {
    full_name?: string;
  };
}

type UserRole = {
  user_id: string;
  role_type: string;
};

export const UserManagement = () => {
  const [updating, setUpdating] = useState<string | null>(null);

  const { data: users, isLoading, error } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error("認証が必要です");

        // 管理者権限の確認
        const { data: roleCheck, error: roleError } = await supabase
          .from("user_roles")
          .select("role_type")
          .eq("user_id", user.id)
          .eq("role_type", "admin")
          .single();

        if (roleError || !roleCheck) {
          console.error("Role check error:", roleError);
          throw new Error("管理者権限がありません");
        }

        // ユーザー一覧の取得
        const { data: { users }, error: usersError } = await supabase.auth.admin.listUsers();
        if (usersError) {
          console.error("Users fetch error:", usersError);
          throw usersError;
        }

        // ユーザーの役割を取得
        const { data: roles, error: rolesError } = await supabase
          .from("user_roles")
          .select("user_id, role_type");

        if (rolesError) {
          console.error("Roles fetch error:", rolesError);
          throw rolesError;
        }

        return users.map((user: AuthUser) => ({
          id: user.id,
          email: user.email,
          full_name: user.user_metadata?.full_name,
          user_roles: roles?.filter((role: UserRole) => role.user_id === user.id) || []
        }));
      } catch (error) {
        console.error("Query error:", error);
        throw error;
      }
    },
  });

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-red-500">
        <p>エラーが発生しました：{(error as Error).message}</p>
      </div>
    );
  }

  const handleRoleChange = async (userId: string, role: string) => {
    setUpdating(userId);
    try {
      // Delete existing roles
      await supabase
        .from("user_roles")
        .delete()
        .eq("user_id", userId);

      // Insert new role
      if (role !== "none") {
        const { error } = await supabase
          .from("user_roles")
          .insert({ user_id: userId, role_type: role });

        if (error) throw error;
      }

      toast.success("役割を更新しました");
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("役割の更新に失敗しました");
    } finally {
      setUpdating(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5" />
        <h2 className="text-xl font-semibold">ユーザー管理</h2>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap p-2 sm:p-4">名前</TableHead>
              <TableHead className="whitespace-nowrap min-w-[200px] p-2 sm:p-4">メール</TableHead>
              <TableHead className="whitespace-nowrap p-2 sm:p-4">役割</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="whitespace-nowrap p-2 sm:p-4">{user.full_name || "未設定"}</TableCell>
                <TableCell className="break-all p-2 sm:p-4">{user.email}</TableCell>
                <TableCell className="p-2 sm:p-4">
                  <Select
                    disabled={updating === user.id}
                    value={user.user_roles?.[0]?.role_type || "none"}
                    onValueChange={(value) => handleRoleChange(user.id, value)}
                  >
                    <SelectTrigger className="w-[200px] max-w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">一般ユーザー</SelectItem>
                      <SelectItem value="admin">管理者</SelectItem>
                      <SelectItem value="instructor">道場指導責任者</SelectItem>
                      <SelectItem value="referee">審判</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
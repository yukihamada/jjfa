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

type UserRole = {
  user_id: string;
  role_type: string;
};

type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  user_roles: UserRole[];
};

export const UserManagement = () => {
  const [updating, setUpdating] = useState<string | null>(null);

  const { data: profiles, isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const { data: profiles } = await supabase
        .from("profiles")
        .select(`
          id,
          email,
          full_name,
          user_roles (
            role_type
          )
        `);

      return profiles as Profile[];
    },
  });

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

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名前</TableHead>
            <TableHead>メール</TableHead>
            <TableHead>役割</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profiles?.map((profile) => (
            <TableRow key={profile.id}>
              <TableCell>{profile.full_name || "未設定"}</TableCell>
              <TableCell>{profile.email}</TableCell>
              <TableCell>
                <Select
                  disabled={updating === profile.id}
                  value={profile.user_roles?.[0]?.role_type || "none"}
                  onValueChange={(value) => handleRoleChange(profile.id, value)}
                >
                  <SelectTrigger className="w-[200px]">
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
  );
};
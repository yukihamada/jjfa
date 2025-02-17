
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { LockIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

export const PasswordProtection = ({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) => {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("jjfa-authenticated");
    if (isAuthenticated === "true") {
      onAuthenticated();
      setOpen(false);
    }
  }, [onAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "jjfa") {
      localStorage.setItem("jjfa-authenticated", "true");
      onAuthenticated();
      setOpen(false);
      toast({
        title: "認証成功",
        description: "ようこそJJFAへ",
      });
    } else {
      toast({
        title: "認証エラー",
        description: "パスワードが正しくありません",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center flex items-center justify-center gap-2">
            <LockIcon className="w-5 h-5" />
            JJFAへようこそ
          </DialogTitle>
        </DialogHeader>
        <Card className="border-none shadow-none">
          <CardHeader className="px-0">
            <p className="text-sm text-center text-muted-foreground">
              アクセスにはパスワードが必要です
            </p>
          </CardHeader>
          <CardContent className="px-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="パスワードを入力してください"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                    autoFocus
                  />
                  <LockIcon className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700">
                確認
              </Button>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

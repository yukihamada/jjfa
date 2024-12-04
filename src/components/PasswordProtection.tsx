import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const PasswordProtection = ({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) => {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "jjfa") {
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">JJFAへようこそ</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="パスワードを入力してください"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            確認
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const PasswordProtection = ({
  onAuthenticated,
}: {
  onAuthenticated: () => void;
}) => {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Store the current path in sessionStorage when the component mounts
    if (location.pathname !== "/") {
      sessionStorage.setItem("returnUrl", location.pathname);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "jjfa") {
      onAuthenticated();
      setOpen(false);
      toast({
        title: "認証成功",
        description: "ようこそJJFAへ",
      });

      // Redirect to the stored return URL if it exists
      const returnUrl = sessionStorage.getItem("returnUrl");
      if (returnUrl) {
        sessionStorage.removeItem("returnUrl"); // Clear the stored URL
        navigate(returnUrl);
      }
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
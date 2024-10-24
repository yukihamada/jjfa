import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { DojoSelector } from "@/components/DojoSelector";

interface Dojo {
  id: string;
  name: string;
  address: string;
  distance?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const TrialClass = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDojo, setSelectedDojo] = useState<Dojo | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleDojoSelect = (dojo: Dojo) => {
    setSelectedDojo(dojo);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "予約を受け付けました",
      description: "担当者からご連絡させていただきます。",
    });
    
    setIsSubmitting(false);
    setShowForm(false);
    setSelectedDojo(null);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-center">無料体験予約</CardTitle>
              <CardDescription className="text-center">
                {showForm 
                  ? `${selectedDojo?.name}での体験予約` 
                  : "最寄りの道場を選択してください"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!showForm ? (
                <DojoSelector onSelect={handleDojoSelect} />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold">{selectedDojo?.name}</p>
                    <p className="text-sm text-gray-600">{selectedDojo?.address}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">お名前 *</Label>
                    <Input 
                      id="name" 
                      required 
                      placeholder="山田 太郎"
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      placeholder="example@email.com"
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">電話番号 *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      placeholder="090-1234-5678"
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred-date">希望日時 *</Label>
                    <Select required>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="希望日時を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monday-morning">月曜日 午前クラス (10:00-11:30)</SelectItem>
                        <SelectItem value="monday-evening">月曜日 夜クラス (19:00-20:30)</SelectItem>
                        <SelectItem value="wednesday-morning">水曜日 午前クラス (10:00-11:30)</SelectItem>
                        <SelectItem value="wednesday-evening">水曜日 夜クラス (19:00-20:30)</SelectItem>
                        <SelectItem value="friday-morning">金曜日 午前クラス (10:00-11:30)</SelectItem>
                        <SelectItem value="friday-evening">金曜日 夜クラス (19:00-20:30)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">格闘技経験</Label>
                    <Select>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="経験を選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">経験なし</SelectItem>
                        <SelectItem value="judo">柔道経験あり</SelectItem>
                        <SelectItem value="karate">空手経験あり</SelectItem>
                        <SelectItem value="other">その他格闘技経験あり</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">その他ご要望</Label>
                    <Textarea 
                      id="message" 
                      placeholder="ご質問やご要望があればご記入ください"
                      className="bg-white"
                    />
                  </div>

                  <div className="pt-4 space-y-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-slate-800 text-white hover:bg-slate-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "送信中..." : "予約する"}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => setShowForm(false)}
                    >
                      道場を選び直す
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrialClass;

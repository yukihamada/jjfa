import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface CreateStreamDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStreamCreated?: (streamKey: string) => void;
}

interface Fighter {
  nickname: string | null;
}

interface Match {
  id: string;
  match_number: number;
  blue_fighter: Fighter | null;
  red_fighter: Fighter | null;
}

export const CreateStreamDialog = ({ open, onOpenChange, onStreamCreated }: CreateStreamDialogProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedMatch, setSelectedMatch] = useState<string>("");

  // Fetch upcoming matches within 5 minutes
  const { data: upcomingMatches } = useQuery({
    queryKey: ['upcoming-matches'],
    queryFn: async () => {
      const fiveMinutesFromNow = new Date(Date.now() + 5 * 60 * 1000).toISOString();
      const now = new Date().toISOString();

      const { data, error } = await supabase
        .from('matches')
        .select(`
          id,
          match_number,
          blue_fighter:blue_fighter_id(nickname),
          red_fighter:red_fighter_id(nickname)
        `)
        .gte('match_time', now)
        .lte('match_time', fiveMinutesFromNow)
        .order('match_time', { ascending: true });

      if (error) throw error;
      return data as Match[];
    },
    enabled: open, // Only fetch when dialog is open
  });

  const createStream = useMutation({
    mutationFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("認証が必要です");

      const streamKey = crypto.randomUUID();
      const { data, error } = await supabase
        .from('live_streams')
        .insert({
          user_id: user.id,
          title,
          description,
          stream_key: streamKey,
          status: 'offline',
          is_official_match: !!selectedMatch, // Set to true if a match is selected
        })
        .select()
        .single();

      if (error) throw error;
      return { ...data, streamKey };
    },
    onSuccess: (data) => {
      toast.success("配信を作成しました");
      onOpenChange(false);
      onStreamCreated?.(data.streamKey);
      navigate(`/live/${data.id}`);
    },
    onError: (error) => {
      toast.error("配信の作成に失敗しました: " + error.message);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("タイトルを入力してください");
      return;
    }
    createStream.mutate();
  };

  const getMatchLabel = (match: Match) => {
    const blueName = match.blue_fighter?.nickname || "青コーナー";
    const redName = match.red_fighter?.nickname || "赤コーナー";
    return `試合${match.match_number}: ${blueName} vs ${redName}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>新規配信を作成</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {upcomingMatches && upcomingMatches.length > 0 && (
            <div className="space-y-2">
              <Label htmlFor="match">公式試合を選択</Label>
              <Select
                value={selectedMatch}
                onValueChange={setSelectedMatch}
              >
                <SelectTrigger>
                  <SelectValue placeholder="公式試合を選択（任意）" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">
                    通常配信
                  </SelectItem>
                  {upcomingMatches.map((match) => (
                    <SelectItem key={match.id} value={match.id}>
                      {getMatchLabel(match)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="title">タイトル</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="配信のタイトルを入力"
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">説明</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="配信の説明を入力（任意）"
              maxLength={500}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              キャンセル
            </Button>
            <Button 
              type="submit"
              disabled={createStream.isPending}
            >
              {createStream.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  作成中...
                </>
              ) : (
                "配信を作成"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
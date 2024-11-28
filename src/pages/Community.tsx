import { useEffect, useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";
import { RegistrationForm } from "@/components/community/RegistrationForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Award, BookOpen, Vote, Coins } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";

const Community = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);
  const [newPost, setNewPost] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const { data: discussions, isLoading } = useQuery({
    queryKey: ['discussions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('discussions')
        .select(`
          *,
          profiles (username, full_name),
          likes (user_id),
          comments (
            id,
            content,
            created_at,
            profiles (username, full_name)
          )
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const createPost = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('discussions')
        .insert([
          {
            title: newPostTitle,
            content: newPost,
            user_id: user?.id
          }
        ]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
      setNewPost("");
      setNewPostTitle("");
      toast.success("投稿が完了しました");
    },
    onError: () => {
      toast.error("投稿に失敗しました");
    }
  });

  const toggleLike = useMutation({
    mutationFn: async (discussionId: string) => {
      const { data: existingLike } = await supabase
        .from('likes')
        .select()
        .eq('discussion_id', discussionId)
        .eq('user_id', user?.id)
        .single();

      if (existingLike) {
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('discussion_id', discussionId)
          .eq('user_id', user?.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('likes')
          .insert([
            {
              discussion_id: discussionId,
              user_id: user?.id
            }
          ]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
    },
    onError: () => {
      toast.error("操作に失敗しました");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPost.trim()) {
      toast.error("タイトルと本文を入力してください");
      return;
    }
    createPost.mutate();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
        <PageTitle title={t('community.title')} />
        <div className="container mx-auto py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="prose">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                    {t('community.joinTitle')}
                  </h1>
                  <p className="text-lg text-slate-600 mb-6">
                    {t('community.joinSubtitle')}
                  </p>
                </div>
                <RegistrationForm />
              </div>
              <div>
                <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-800">
                      {t('community.benefits.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        { icon: Trophy, title: t('community.benefits.tournament.title'), description: t('community.benefits.tournament.description') },
                        { icon: BookOpen, title: t('community.benefits.training.title'), description: t('community.benefits.training.description') },
                        { icon: Users, title: t('community.benefits.community.title'), description: t('community.benefits.community.description') },
                        { icon: Award, title: t('community.benefits.ranking.title'), description: t('community.benefits.ranking.description') },
                        { icon: Vote, title: t('community.benefits.dao.title'), description: t('community.benefits.dao.description') },
                        { icon: Coins, title: t('community.benefits.token.title'), description: t('community.benefits.token.description') }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <benefit.icon className="w-6 h-6 text-slate-700" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-800">{benefit.title}</h3>
                            <p className="text-slate-600">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <PageTitle title="コミュニティ掲示板" />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>新規投稿</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="タイトルを入力"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="投稿内容を入力"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={createPost.isPending}
                >
                  投稿する
                </Button>
              </form>
            </CardContent>
          </Card>

          {isLoading ? (
            <div className="text-center">読み込み中...</div>
          ) : (
            <div className="space-y-4">
              {discussions?.map((discussion: any) => (
                <Card key={discussion.id} className="bg-white shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {discussion.profiles?.username?.[0] || discussion.profiles?.full_name?.[0] || '?'}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">
                          {discussion.profiles?.username || discussion.profiles?.full_name || '匿名ユーザー'}
                        </p>
                        <p className="text-sm text-slate-500">
                          {formatDistanceToNow(new Date(discussion.created_at), { 
                            addSuffix: true,
                            locale: ja 
                          })}
                        </p>
                      </div>
                    </div>
                    <CardTitle>{discussion.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap mb-4">{discussion.content}</p>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLike.mutate(discussion.id)}
                        className={`flex items-center space-x-1 ${
                          discussion.likes?.some((like: any) => like.user_id === user?.id)
                            ? 'text-red-500'
                            : 'text-slate-500'
                        }`}
                      >
                        <span>♥</span>
                        <span>{discussion.likes?.length || 0}</span>
                      </Button>
                      <span className="text-sm text-slate-500">
                        コメント {discussion.comments?.length || 0}件
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
export interface Profile {
  username: string;
  avatar_url: string;
}

export interface LiveStream {
  id: string;
  title: string;
  description: string | null;
  status: 'live' | 'offline' | 'ended';
  viewer_count: number;
  thumbnail_url: string | null;
  profiles: Profile;
  created_at: string;
  updated_at: string;
  stream_key: string;
  started_at: string | null;
  ended_at: string | null;
  user_id: string;
  archive_url: string | null;
  is_official_match: boolean;
  token_rewarded: boolean;
}
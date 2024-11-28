import { Database } from './base';

export interface ProfilesTable extends Database['public']['Tables'] {
  profiles: {
    Row: {
      id: string;
      username?: string;
      full_name?: string;
      bio?: string;
      created_at: string;
      updated_at: string;
      membership_status?: string;
      membership_number?: string;
      phone?: string;
      address?: string;
      avatar_url?: string;
    };
    Insert: {
      id: string;
      username?: string;
      full_name?: string;
      bio?: string;
      created_at?: string;
      updated_at?: string;
      membership_status?: string;
      membership_number?: string;
      phone?: string;
      address?: string;
      avatar_url?: string;
    };
    Update: {
      id?: string;
      username?: string;
      full_name?: string;
      bio?: string;
      created_at?: string;
      updated_at?: string;
      membership_status?: string;
      membership_number?: string;
      phone?: string;
      address?: string;
      avatar_url?: string;
    };
    Relationships: [];
  };
}
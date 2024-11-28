import { Database } from './base';

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

export interface ProfilesTable {
  profiles: {
    Row: Profile;
    Insert: ProfileInsert;
    Update: ProfileUpdate;
  };
}
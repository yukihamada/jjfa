
import { Database } from './base';

export type Profile = Database['public']['Tables']['profiles']['Row'] & {
  phone?: string;
  address?: string;
  emergency_contact?: string;
  emergency_phone?: string;
  emergency_relation?: string;
};

export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];

export interface ProfilesTable {
  profiles: {
    Row: Profile;
    Insert: ProfileInsert;
    Update: ProfileUpdate;
  };
}

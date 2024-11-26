export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string
          id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: never
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: never
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      belts: {
        Row: {
          belt_order: number
          color: string
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          belt_order: number
          color: string
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          belt_order?: number
          color?: string
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string
          discussion_id: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          discussion_id?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          discussion_id?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_discussion_id_fkey"
            columns: ["discussion_id"]
            isOneToOne: false
            referencedRelation: "discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      competitions: {
        Row: {
          created_at: string | null
          date: string
          description: string | null
          entry_fee: number | null
          entry_link: string | null
          format: string
          id: number
          location: string
          name: string
          organizer: string
          team_size: number | null
          team_weight_limit: number | null
        }
        Insert: {
          created_at?: string | null
          date: string
          description?: string | null
          entry_fee?: number | null
          entry_link?: string | null
          format?: string
          id?: number
          location: string
          name: string
          organizer: string
          team_size?: number | null
          team_weight_limit?: number | null
        }
        Update: {
          created_at?: string | null
          date?: string
          description?: string | null
          entry_fee?: number | null
          entry_link?: string | null
          format?: string
          id?: number
          location?: string
          name?: string
          organizer?: string
          team_size?: number | null
          team_weight_limit?: number | null
        }
        Relationships: []
      }
      discussion_tags: {
        Row: {
          discussion_id: string
          tag_id: string
        }
        Insert: {
          discussion_id: string
          tag_id: string
        }
        Update: {
          discussion_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "discussion_tags_discussion_id_fkey"
            columns: ["discussion_id"]
            isOneToOne: false
            referencedRelation: "discussions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discussion_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      discussions: {
        Row: {
          content: string
          created_at: string
          id: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dojos: {
        Row: {
          address: string | null
          auth_user_id: string | null
          created_at: string
          description: string | null
          description_en: string | null
          email: string | null
          id: string
          name: string
          name_en: string | null
          owner_id: string | null
          phone: string | null
          status: string | null
          subdomain: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          auth_user_id?: string | null
          created_at?: string
          description?: string | null
          description_en?: string | null
          email?: string | null
          id?: string
          name: string
          name_en?: string | null
          owner_id?: string | null
          phone?: string | null
          status?: string | null
          subdomain?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          auth_user_id?: string | null
          created_at?: string
          description?: string | null
          description_en?: string | null
          email?: string | null
          id?: string
          name?: string
          name_en?: string | null
          owner_id?: string | null
          phone?: string | null
          status?: string | null
          subdomain?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      donations: {
        Row: {
          amount: number
          created_at: string
          id: string
          message: string | null
          receiver_id: string | null
          sender_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          message?: string | null
          receiver_id?: string | null
          sender_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          message?: string | null
          receiver_id?: string | null
          sender_id?: string | null
        }
        Relationships: []
      }
      fighters: {
        Row: {
          achievements: string[] | null
          belt_id: string | null
          birth_date: string | null
          competition_experience: number | null
          created_at: string
          dojo_id: string | null
          entrance_music: string | null
          height: number | null
          id: string
          is_active: boolean | null
          nickname: string | null
          preferred_stance: string | null
          profile_photo: string | null
          reach: number | null
          social_media_links: Json | null
          updated_at: string
          user_id: string | null
          weight: number | null
        }
        Insert: {
          achievements?: string[] | null
          belt_id?: string | null
          birth_date?: string | null
          competition_experience?: number | null
          created_at?: string
          dojo_id?: string | null
          entrance_music?: string | null
          height?: number | null
          id?: string
          is_active?: boolean | null
          nickname?: string | null
          preferred_stance?: string | null
          profile_photo?: string | null
          reach?: number | null
          social_media_links?: Json | null
          updated_at?: string
          user_id?: string | null
          weight?: number | null
        }
        Update: {
          achievements?: string[] | null
          belt_id?: string | null
          birth_date?: string | null
          competition_experience?: number | null
          created_at?: string
          dojo_id?: string | null
          entrance_music?: string | null
          height?: number | null
          id?: string
          is_active?: boolean | null
          nickname?: string | null
          preferred_stance?: string | null
          profile_photo?: string | null
          reach?: number | null
          social_media_links?: Json | null
          updated_at?: string
          user_id?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fighters_belt_id_fkey"
            columns: ["belt_id"]
            isOneToOne: false
            referencedRelation: "belts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fighters_dojo_id_fkey"
            columns: ["dojo_id"]
            isOneToOne: false
            referencedRelation: "dojos"
            referencedColumns: ["id"]
          },
        ]
      }
      likes: {
        Row: {
          created_at: string
          discussion_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          discussion_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          discussion_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_discussion_id_fkey"
            columns: ["discussion_id"]
            isOneToOne: false
            referencedRelation: "discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      match_scores: {
        Row: {
          fighter_id: string | null
          id: string
          match_id: string | null
          points: number
          round: number
          technique: string
          time_stamp: string
        }
        Insert: {
          fighter_id?: string | null
          id?: string
          match_id?: string | null
          points: number
          round: number
          technique: string
          time_stamp?: string
        }
        Update: {
          fighter_id?: string | null
          id?: string
          match_id?: string | null
          points?: number
          round?: number
          technique?: string
          time_stamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_scores_fighter_id_fkey"
            columns: ["fighter_id"]
            isOneToOne: false
            referencedRelation: "fighters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_scores_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          blue_fighter_id: string | null
          competition_id: number | null
          created_at: string
          id: string
          match_number: number
          match_time: string | null
          number_of_rounds: number | null
          red_fighter_id: string | null
          referee_id: string | null
          round_duration: number | null
          status: string | null
          updated_at: string
          winner_id: string | null
        }
        Insert: {
          blue_fighter_id?: string | null
          competition_id?: number | null
          created_at?: string
          id?: string
          match_number: number
          match_time?: string | null
          number_of_rounds?: number | null
          red_fighter_id?: string | null
          referee_id?: string | null
          round_duration?: number | null
          status?: string | null
          updated_at?: string
          winner_id?: string | null
        }
        Update: {
          blue_fighter_id?: string | null
          competition_id?: number | null
          created_at?: string
          id?: string
          match_number?: number
          match_time?: string | null
          number_of_rounds?: number | null
          red_fighter_id?: string | null
          referee_id?: string | null
          round_duration?: number | null
          status?: string | null
          updated_at?: string
          winner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_blue_fighter_id_fkey"
            columns: ["blue_fighter_id"]
            isOneToOne: false
            referencedRelation: "fighters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_red_fighter_id_fkey"
            columns: ["red_fighter_id"]
            isOneToOne: false
            referencedRelation: "fighters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "fighters"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          bio: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          category: string | null
          competition_type: string | null
          created_at: string | null
          description: string | null
          id: string
          short_id: string
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          user_id: string | null
          video_url: string
          views: number | null
        }
        Insert: {
          category?: string | null
          competition_type?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          short_id: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          user_id?: string | null
          video_url: string
          views?: number | null
        }
        Update: {
          category?: string | null
          competition_type?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          short_id?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
          video_url?: string
          views?: number | null
        }
        Relationships: []
      }
      weight_in_officials: {
        Row: {
          created_at: string
          id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      weight_ins: {
        Row: {
          competition_id: number | null
          created_at: string
          fighter_id: string | null
          id: string
          status: string | null
          weigh_in_time: string
          weight: number
        }
        Insert: {
          competition_id?: number | null
          created_at?: string
          fighter_id?: string | null
          id?: string
          status?: string | null
          weigh_in_time?: string
          weight: number
        }
        Update: {
          competition_id?: number | null
          created_at?: string
          fighter_id?: string | null
          id?: string
          status?: string | null
          weigh_in_time?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "weight_ins_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weight_ins_fighter_id_fkey"
            columns: ["fighter_id"]
            isOneToOne: false
            referencedRelation: "fighters"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_profiles_table: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

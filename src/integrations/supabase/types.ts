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
      audit_logs: {
        Row: {
          action: string
          created_at: string
          id: string
          new_data: Json | null
          old_data: Json | null
          record_id: string | null
          table_name: string
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          table_name: string
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string | null
          table_name?: string
          user_id?: string | null
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
      chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      class_bookings: {
        Row: {
          class_id: string
          created_at: string
          id: string
          status: string
          ticket_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          class_id: string
          created_at?: string
          id?: string
          status?: string
          ticket_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          class_id?: string
          created_at?: string
          id?: string
          status?: string
          ticket_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_bookings_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_bookings_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "user_class_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      class_ticket_types: {
        Row: {
          created_at: string
          description: string | null
          dojo_id: string
          id: string
          name: string
          price: number
          updated_at: string
          uses: number
          validity_days: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          dojo_id: string
          id?: string
          name: string
          price: number
          updated_at?: string
          uses?: number
          validity_days?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          dojo_id?: string
          id?: string
          name?: string
          price?: number
          updated_at?: string
          uses?: number
          validity_days?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "class_ticket_types_dojo_id_fkey"
            columns: ["dojo_id"]
            isOneToOne: false
            referencedRelation: "dojos"
            referencedColumns: ["id"]
          },
        ]
      }
      classes: {
        Row: {
          capacity: number
          created_at: string
          id: string
          name: string
          time: string
          updated_at: string
        }
        Insert: {
          capacity?: number
          created_at?: string
          id?: string
          name: string
          time: string
          updated_at?: string
        }
        Update: {
          capacity?: number
          created_at?: string
          id?: string
          name?: string
          time?: string
          updated_at?: string
        }
        Relationships: []
      }
      comment_likes: {
        Row: {
          comment_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comment_likes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
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
          {
            foreignKeyName: "comments_profile_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      community_registrations: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
          status: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      competition_entries: {
        Row: {
          belt_id: string | null
          competition_id: number | null
          created_at: string
          entry_status: string | null
          fighter_id: string | null
          id: string
          jjfa_member_id: string | null
          updated_at: string
          weight_division: string | null
        }
        Insert: {
          belt_id?: string | null
          competition_id?: number | null
          created_at?: string
          entry_status?: string | null
          fighter_id?: string | null
          id?: string
          jjfa_member_id?: string | null
          updated_at?: string
          weight_division?: string | null
        }
        Update: {
          belt_id?: string | null
          competition_id?: number | null
          created_at?: string
          entry_status?: string | null
          fighter_id?: string | null
          id?: string
          jjfa_member_id?: string | null
          updated_at?: string
          weight_division?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "competition_entries_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competition_entries_fighter_id_fkey"
            columns: ["fighter_id"]
            isOneToOne: false
            referencedRelation: "fighters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competition_entries_jjfa_member_id_fkey"
            columns: ["jjfa_member_id"]
            isOneToOne: false
            referencedRelation: "jjfa_members"
            referencedColumns: ["id"]
          },
        ]
      }
      competition_registrations: {
        Row: {
          age: number
          belt_level: string
          competition_id: number | null
          created_at: string
          email: string
          fighter_name: string
          id: string
          payment_status: string | null
          phone: string | null
          status: Database["public"]["Enums"]["entry_status"] | null
          updated_at: string
          user_id: string | null
          weight: number
        }
        Insert: {
          age: number
          belt_level: string
          competition_id?: number | null
          created_at?: string
          email: string
          fighter_name: string
          id?: string
          payment_status?: string | null
          phone?: string | null
          status?: Database["public"]["Enums"]["entry_status"] | null
          updated_at?: string
          user_id?: string | null
          weight: number
        }
        Update: {
          age?: number
          belt_level?: string
          competition_id?: number | null
          created_at?: string
          email?: string
          fighter_name?: string
          id?: string
          payment_status?: string | null
          phone?: string | null
          status?: Database["public"]["Enums"]["entry_status"] | null
          updated_at?: string
          user_id?: string | null
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "competition_registrations_competition_id_fkey"
            columns: ["competition_id"]
            isOneToOne: false
            referencedRelation: "competitions"
            referencedColumns: ["id"]
          },
        ]
      }
      competitions: {
        Row: {
          created_at: string | null
          date: string
          description: string | null
          entry_categories: Json | null
          entry_count: number | null
          entry_deadline: string | null
          entry_fee: number | null
          format: string
          id: number
          location: string
          name: string
          organizer: string
          registration_deadline: string | null
          rules_pdf_url: string | null
          team_size: number | null
          team_weight_limit: number | null
          weigh_in_end: string | null
          weigh_in_start: string | null
          weight_classes: string[] | null
        }
        Insert: {
          created_at?: string | null
          date: string
          description?: string | null
          entry_categories?: Json | null
          entry_count?: number | null
          entry_deadline?: string | null
          entry_fee?: number | null
          format?: string
          id?: number
          location: string
          name: string
          organizer: string
          registration_deadline?: string | null
          rules_pdf_url?: string | null
          team_size?: number | null
          team_weight_limit?: number | null
          weigh_in_end?: string | null
          weigh_in_start?: string | null
          weight_classes?: string[] | null
        }
        Update: {
          created_at?: string | null
          date?: string
          description?: string | null
          entry_categories?: Json | null
          entry_count?: number | null
          entry_deadline?: string | null
          entry_fee?: number | null
          format?: string
          id?: number
          location?: string
          name?: string
          organizer?: string
          registration_deadline?: string | null
          rules_pdf_url?: string | null
          team_size?: number | null
          team_weight_limit?: number | null
          weigh_in_end?: string | null
          weigh_in_start?: string | null
          weight_classes?: string[] | null
        }
        Relationships: []
      }
      dao_memberships: {
        Row: {
          created_at: string
          id: string
          nft_token_id: string | null
          purchase_date: string | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          nft_token_id?: string | null
          purchase_date?: string | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          nft_token_id?: string | null
          purchase_date?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      direct_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          read_at: string | null
          receiver_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          read_at?: string | null
          receiver_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          read_at?: string | null
          receiver_id?: string
          sender_id?: string
        }
        Relationships: []
      }
      discussions: {
        Row: {
          attachments: Json | null
          content: string
          created_at: string
          id: string
          profile_id: string | null
          updated_at: string
          user_id: string
          visibility: string
        }
        Insert: {
          attachments?: Json | null
          content: string
          created_at?: string
          id?: string
          profile_id?: string | null
          updated_at?: string
          user_id: string
          visibility?: string
        }
        Update: {
          attachments?: Json | null
          content?: string
          created_at?: string
          id?: string
          profile_id?: string | null
          updated_at?: string
          user_id?: string
          visibility?: string
        }
        Relationships: [
          {
            foreignKeyName: "discussions_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
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
      drill_progress: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          practiced_at: string
          repetitions: number | null
          technique_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          practiced_at?: string
          repetitions?: number | null
          technique_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          practiced_at?: string
          repetitions?: number | null
          technique_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "drill_progress_technique_id_fkey"
            columns: ["technique_id"]
            isOneToOne: false
            referencedRelation: "technique_details"
            referencedColumns: ["id"]
          },
        ]
      }
      fighters: {
        Row: {
          achievements: string[] | null
          belt_id: string | null
          birth_date: string | null
          competition_experience: number | null
          created_at: string
          dojo_id: string | null
          draws: number | null
          entrance_music: string | null
          guardian_consent: boolean | null
          height: number | null
          id: string
          instructor: string | null
          is_active: boolean | null
          losses: number | null
          nickname: string | null
          preferred_stance: string | null
          profile_photo: string | null
          reach: number | null
          social_media_links: Json | null
          stripes: number | null
          total_matches: number | null
          updated_at: string
          user_id: string | null
          weight: number | null
          wins: number | null
        }
        Insert: {
          achievements?: string[] | null
          belt_id?: string | null
          birth_date?: string | null
          competition_experience?: number | null
          created_at?: string
          dojo_id?: string | null
          draws?: number | null
          entrance_music?: string | null
          guardian_consent?: boolean | null
          height?: number | null
          id?: string
          instructor?: string | null
          is_active?: boolean | null
          losses?: number | null
          nickname?: string | null
          preferred_stance?: string | null
          profile_photo?: string | null
          reach?: number | null
          social_media_links?: Json | null
          stripes?: number | null
          total_matches?: number | null
          updated_at?: string
          user_id?: string | null
          weight?: number | null
          wins?: number | null
        }
        Update: {
          achievements?: string[] | null
          belt_id?: string | null
          birth_date?: string | null
          competition_experience?: number | null
          created_at?: string
          dojo_id?: string | null
          draws?: number | null
          entrance_music?: string | null
          guardian_consent?: boolean | null
          height?: number | null
          id?: string
          instructor?: string | null
          is_active?: boolean | null
          losses?: number | null
          nickname?: string | null
          preferred_stance?: string | null
          profile_photo?: string | null
          reach?: number | null
          social_media_links?: Json | null
          stripes?: number | null
          total_matches?: number | null
          updated_at?: string
          user_id?: string | null
          weight?: number | null
          wins?: number | null
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
          {
            foreignKeyName: "fighters_profile_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      follows: {
        Row: {
          created_at: string
          follower_id: string
          following_id: string
          id: string
        }
        Insert: {
          created_at?: string
          follower_id: string
          following_id: string
          id?: string
        }
        Update: {
          created_at?: string
          follower_id?: string
          following_id?: string
          id?: string
        }
        Relationships: []
      }
      jjfa_members: {
        Row: {
          created_at: string
          id: string
          membership_number: string | null
          membership_status: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          membership_number?: string | null
          membership_status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          membership_number?: string | null
          membership_status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      learning_progress: {
        Row: {
          created_at: string
          description: string | null
          id: string
          learned_at: string
          notes: string | null
          skill_level: string
          technique: string
          user_id: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          learned_at?: string
          notes?: string | null
          skill_level?: string
          technique: string
          user_id: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          learned_at?: string
          notes?: string | null
          skill_level?: string
          technique?: string
          user_id?: string
          video_url?: string | null
        }
        Relationships: []
      }
      learning_progress_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          progress_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          progress_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          progress_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "learning_progress_comments_progress_id_fkey"
            columns: ["progress_id"]
            isOneToOne: false
            referencedRelation: "learning_progress"
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
      live_streams: {
        Row: {
          archive_url: string | null
          created_at: string
          description: string | null
          ended_at: string | null
          id: string
          is_official_match: boolean | null
          started_at: string | null
          status: string | null
          stream_key: string
          thumbnail_url: string | null
          title: string
          token_rewarded: boolean | null
          updated_at: string
          user_id: string
          viewer_count: number | null
        }
        Insert: {
          archive_url?: string | null
          created_at?: string
          description?: string | null
          ended_at?: string | null
          id?: string
          is_official_match?: boolean | null
          started_at?: string | null
          status?: string | null
          stream_key: string
          thumbnail_url?: string | null
          title: string
          token_rewarded?: boolean | null
          updated_at?: string
          user_id: string
          viewer_count?: number | null
        }
        Update: {
          archive_url?: string | null
          created_at?: string
          description?: string | null
          ended_at?: string | null
          id?: string
          is_official_match?: boolean | null
          started_at?: string | null
          status?: string | null
          stream_key?: string
          thumbnail_url?: string | null
          title?: string
          token_rewarded?: boolean | null
          updated_at?: string
          user_id?: string
          viewer_count?: number | null
        }
        Relationships: []
      }
      livekit_rooms: {
        Row: {
          created_at: string
          id: string
          participant_identity: string
          room_name: string
          stream_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          participant_identity: string
          room_name: string
          stream_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          participant_identity?: string
          room_name?: string
          stream_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "livekit_rooms_stream_id_fkey"
            columns: ["stream_id"]
            isOneToOne: false
            referencedRelation: "live_streams"
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
          timestamp_ms: number | null
        }
        Insert: {
          fighter_id?: string | null
          id?: string
          match_id?: string | null
          points: number
          round: number
          technique: string
          time_stamp?: string
          timestamp_ms?: number | null
        }
        Update: {
          fighter_id?: string | null
          id?: string
          match_id?: string | null
          points?: number
          round?: number
          technique?: string
          time_stamp?: string
          timestamp_ms?: number | null
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
          blue_score: number | null
          competition_id: number | null
          created_at: string
          id: string
          is_displayed: boolean | null
          match_date: string | null
          match_name: string | null
          match_number: number
          match_result: string | null
          match_time: string | null
          notes: string | null
          number_of_rounds: number | null
          red_fighter_id: string | null
          red_score: number | null
          referee_id: string | null
          round_duration: number | null
          status: string | null
          updated_at: string
          weight_division: string | null
          winner_id: string | null
        }
        Insert: {
          blue_fighter_id?: string | null
          blue_score?: number | null
          competition_id?: number | null
          created_at?: string
          id?: string
          is_displayed?: boolean | null
          match_date?: string | null
          match_name?: string | null
          match_number: number
          match_result?: string | null
          match_time?: string | null
          notes?: string | null
          number_of_rounds?: number | null
          red_fighter_id?: string | null
          red_score?: number | null
          referee_id?: string | null
          round_duration?: number | null
          status?: string | null
          updated_at?: string
          weight_division?: string | null
          winner_id?: string | null
        }
        Update: {
          blue_fighter_id?: string | null
          blue_score?: number | null
          competition_id?: number | null
          created_at?: string
          id?: string
          is_displayed?: boolean | null
          match_date?: string | null
          match_name?: string | null
          match_number?: number
          match_result?: string | null
          match_time?: string | null
          notes?: string | null
          number_of_rounds?: number | null
          red_fighter_id?: string | null
          red_score?: number | null
          referee_id?: string | null
          round_duration?: number | null
          status?: string | null
          updated_at?: string
          weight_division?: string | null
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
      nft_purchases: {
        Row: {
          amount: number
          created_at: string
          id: string
          status: string
          stripe_session_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          status?: string
          stripe_session_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          status?: string
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      nft_sales_config: {
        Row: {
          created_at: string
          current_supply: number | null
          end_date: string
          id: string
          max_supply: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_supply?: number | null
          end_date: string
          id?: string
          max_supply: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_supply?: number | null
          end_date?: string
          id?: string
          max_supply?: number
          updated_at?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          content: string
          created_at: string
          discussion_id: string | null
          id: string
          is_read: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          discussion_id?: string | null
          id?: string
          is_read?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          discussion_id?: string | null
          id?: string
          is_read?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_discussion_id_fkey"
            columns: ["discussion_id"]
            isOneToOne: false
            referencedRelation: "discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      product_categories: {
        Row: {
          created_at: string
          description: string | null
          dojo_id: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          dojo_id: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          dojo_id?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_categories_dojo_id_fkey"
            columns: ["dojo_id"]
            isOneToOne: false
            referencedRelation: "dojos"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category_id: string | null
          created_at: string
          description: string | null
          dojo_id: string
          id: string
          image_url: string | null
          name: string
          price: number
          stock: number
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          dojo_id: string
          id?: string
          image_url?: string | null
          name: string
          price: number
          stock?: number
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          created_at?: string
          description?: string | null
          dojo_id?: string
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          stock?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_dojo_id_fkey"
            columns: ["dojo_id"]
            isOneToOne: false
            referencedRelation: "dojos"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_private_info: {
        Row: {
          address: string | null
          created_at: string
          email: string | null
          emergency_contact: string | null
          emergency_phone: string | null
          emergency_relation: string | null
          guardian_address: string | null
          guardian_email: string | null
          guardian_name: string | null
          guardian_phone: string | null
          guardian_relation: string | null
          id: string
          phone: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          email?: string | null
          emergency_contact?: string | null
          emergency_phone?: string | null
          emergency_relation?: string | null
          guardian_address?: string | null
          guardian_email?: string | null
          guardian_name?: string | null
          guardian_phone?: string | null
          guardian_relation?: string | null
          id: string
          phone?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          created_at?: string
          email?: string | null
          emergency_contact?: string | null
          emergency_phone?: string | null
          emergency_relation?: string | null
          guardian_address?: string | null
          guardian_email?: string | null
          guardian_name?: string | null
          guardian_phone?: string | null
          guardian_relation?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_private_info_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          company_name: string | null
          created_at: string
          full_name: string | null
          id: string
          is_minor: boolean | null
          membership_number: string | null
          membership_status: string | null
          position: string | null
          signup_domain: string | null
          subscription_plan: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          company_name?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          is_minor?: boolean | null
          membership_number?: string | null
          membership_status?: string | null
          position?: string | null
          signup_domain?: string | null
          subscription_plan?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          company_name?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          is_minor?: boolean | null
          membership_number?: string | null
          membership_status?: string | null
          position?: string | null
          signup_domain?: string | null
          subscription_plan?: string | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      skill_level_descriptions: {
        Row: {
          catchphrase: string
          created_at: string
          description: string
          id: string
          key_points: string[]
          level: Database["public"]["Enums"]["skill_level"]
          updated_at: string
        }
        Insert: {
          catchphrase: string
          created_at?: string
          description: string
          id?: string
          key_points: string[]
          level: Database["public"]["Enums"]["skill_level"]
          updated_at?: string
        }
        Update: {
          catchphrase?: string
          created_at?: string
          description?: string
          id?: string
          key_points?: string[]
          level?: Database["public"]["Enums"]["skill_level"]
          updated_at?: string
        }
        Relationships: []
      }
      stream_rewards: {
        Row: {
          created_at: string
          id: string
          stream_id: string | null
          token_amount: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          stream_id?: string | null
          token_amount?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          stream_id?: string | null
          token_amount?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stream_rewards_stream_id_fkey"
            columns: ["stream_id"]
            isOneToOne: false
            referencedRelation: "live_streams"
            referencedColumns: ["id"]
          },
        ]
      }
      stream_tickets: {
        Row: {
          expires_at: string | null
          id: string
          price: number
          purchased_at: string
          status: string | null
          stream_id: string
          type: string
          user_id: string
        }
        Insert: {
          expires_at?: string | null
          id?: string
          price: number
          purchased_at?: string
          status?: string | null
          stream_id: string
          type: string
          user_id: string
        }
        Update: {
          expires_at?: string | null
          id?: string
          price?: number
          purchased_at?: string
          status?: string | null
          stream_id?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "stream_tickets_stream_id_fkey"
            columns: ["stream_id"]
            isOneToOne: false
            referencedRelation: "live_streams"
            referencedColumns: ["id"]
          },
        ]
      }
      technique_details: {
        Row: {
          black_belt_points: number | null
          blue_belt_points: number | null
          brown_belt_points: number | null
          category: string
          category_type: string | null
          created_at: string
          created_by_user_id: string | null
          description: string
          difficulty: string | null
          dojo_id: string | null
          id: string
          is_drill: boolean | null
          is_premium: boolean
          is_preset: boolean | null
          jiu_jitsu_level: number | null
          order_number: number | null
          parent_category: string | null
          parent_id: string | null
          price: number | null
          purple_belt_points: number | null
          subcategory: string | null
          technique_name: string
          updated_at: string
          video_url: string | null
          visibility: string
          white_belt_points: number | null
        }
        Insert: {
          black_belt_points?: number | null
          blue_belt_points?: number | null
          brown_belt_points?: number | null
          category: string
          category_type?: string | null
          created_at?: string
          created_by_user_id?: string | null
          description: string
          difficulty?: string | null
          dojo_id?: string | null
          id?: string
          is_drill?: boolean | null
          is_premium?: boolean
          is_preset?: boolean | null
          jiu_jitsu_level?: number | null
          order_number?: number | null
          parent_category?: string | null
          parent_id?: string | null
          price?: number | null
          purple_belt_points?: number | null
          subcategory?: string | null
          technique_name: string
          updated_at?: string
          video_url?: string | null
          visibility?: string
          white_belt_points?: number | null
        }
        Update: {
          black_belt_points?: number | null
          blue_belt_points?: number | null
          brown_belt_points?: number | null
          category?: string
          category_type?: string | null
          created_at?: string
          created_by_user_id?: string | null
          description?: string
          difficulty?: string | null
          dojo_id?: string | null
          id?: string
          is_drill?: boolean | null
          is_premium?: boolean
          is_preset?: boolean | null
          jiu_jitsu_level?: number | null
          order_number?: number | null
          parent_category?: string | null
          parent_id?: string | null
          price?: number | null
          purple_belt_points?: number | null
          subcategory?: string | null
          technique_name?: string
          updated_at?: string
          video_url?: string | null
          visibility?: string
          white_belt_points?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "technique_details_dojo_id_fkey"
            columns: ["dojo_id"]
            isOneToOne: false
            referencedRelation: "dojos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technique_details_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "technique_details"
            referencedColumns: ["id"]
          },
        ]
      }
      technique_requirements: {
        Row: {
          created_at: string
          id: string
          level: Database["public"]["Enums"]["skill_level"]
          specific_requirements: string[]
          technique_name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          level: Database["public"]["Enums"]["skill_level"]
          specific_requirements: string[]
          technique_name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          level?: Database["public"]["Enums"]["skill_level"]
          specific_requirements?: string[]
          technique_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      tournament_entries: {
        Row: {
          age: number | null
          age_division: string | null
          belt_rank: string
          created_at: string
          gender: string
          id: string
          name: string
          payment_status: string | null
          stripe_session_id: string | null
          tournament_id: string | null
          updated_at: string
          user_id: string | null
          weight_category: string | null
          weight_division: string | null
        }
        Insert: {
          age?: number | null
          age_division?: string | null
          belt_rank: string
          created_at?: string
          gender: string
          id?: string
          name: string
          payment_status?: string | null
          stripe_session_id?: string | null
          tournament_id?: string | null
          updated_at?: string
          user_id?: string | null
          weight_category?: string | null
          weight_division?: string | null
        }
        Update: {
          age?: number | null
          age_division?: string | null
          belt_rank?: string
          created_at?: string
          gender?: string
          id?: string
          name?: string
          payment_status?: string | null
          stripe_session_id?: string | null
          tournament_id?: string | null
          updated_at?: string
          user_id?: string | null
          weight_category?: string | null
          weight_division?: string | null
        }
        Relationships: []
      }
      training_goals: {
        Row: {
          created_at: string
          current_value: number | null
          end_date: string
          goal_type: string
          id: string
          start_date: string
          status: string | null
          target_value: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_value?: number | null
          end_date: string
          goal_type: string
          id?: string
          start_date?: string
          status?: string | null
          target_value: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_value?: number | null
          end_date?: string
          goal_type?: string
          id?: string
          start_date?: string
          status?: string | null
          target_value?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      training_records: {
        Row: {
          created_at: string
          duration: number
          id: string
          intensity: string | null
          notes: string | null
          tokens_earned: number | null
          training_date: string
          training_type: string
          updated_at: string
          user_id: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          duration: number
          id?: string
          intensity?: string | null
          notes?: string | null
          tokens_earned?: number | null
          training_date?: string
          training_type: string
          updated_at?: string
          user_id: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          duration?: number
          id?: string
          intensity?: string | null
          notes?: string | null
          tokens_earned?: number | null
          training_date?: string
          training_type?: string
          updated_at?: string
          user_id?: string
          video_url?: string | null
        }
        Relationships: []
      }
      typing_progress: {
        Row: {
          accuracy: number
          created_at: string
          id: string
          practice_date: string
          user_id: string
          wpm: number
        }
        Insert: {
          accuracy: number
          created_at?: string
          id?: string
          practice_date?: string
          user_id: string
          wpm: number
        }
        Update: {
          accuracy?: number
          created_at?: string
          id?: string
          practice_date?: string
          user_id?: string
          wpm?: number
        }
        Relationships: []
      }
      user_class_tickets: {
        Row: {
          created_at: string
          dojo_id: string
          expires_at: string | null
          id: string
          remaining_uses: number
          ticket_type_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          dojo_id: string
          expires_at?: string | null
          id?: string
          remaining_uses: number
          ticket_type_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          dojo_id?: string
          expires_at?: string | null
          id?: string
          remaining_uses?: number
          ticket_type_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_class_tickets_dojo_id_fkey"
            columns: ["dojo_id"]
            isOneToOne: false
            referencedRelation: "dojos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_class_tickets_ticket_type_id_fkey"
            columns: ["ticket_type_id"]
            isOneToOne: false
            referencedRelation: "class_ticket_types"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role_type: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          role_type: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role_type?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      videos: {
        Row: {
          category: string | null
          competition_name: string | null
          competition_type: string | null
          created_at: string | null
          description: string | null
          id: string
          is_sparring: boolean | null
          short_id: string
          tagged_users: string[] | null
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          user_id: string | null
          video_url: string
          views: number | null
          visibility: string
        }
        Insert: {
          category?: string | null
          competition_name?: string | null
          competition_type?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_sparring?: boolean | null
          short_id: string
          tagged_users?: string[] | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          user_id?: string | null
          video_url: string
          views?: number | null
          visibility?: string
        }
        Update: {
          category?: string | null
          competition_name?: string | null
          competition_type?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_sparring?: boolean | null
          short_id?: string
          tagged_users?: string[] | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
          video_url?: string
          views?: number | null
          visibility?: string
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
          entry_status: string | null
          fighter_id: string | null
          id: string
          status: string | null
          weigh_in_time: string
          weight: number
        }
        Insert: {
          competition_id?: number | null
          created_at?: string
          entry_status?: string | null
          fighter_id?: string | null
          id?: string
          status?: string | null
          weigh_in_time?: string
          weight: number
        }
        Update: {
          competition_id?: number | null
          created_at?: string
          entry_status?: string | null
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
      yawara_cup_2024: {
        Row: {
          created_at: string
          fighter_name: string
          id: string
          match_number: number | null
          match_time: string | null
          side: string | null
        }
        Insert: {
          created_at?: string
          fighter_name: string
          id?: string
          match_number?: number | null
          match_time?: string | null
          side?: string | null
        }
        Update: {
          created_at?: string
          fighter_name?: string
          id?: string
          match_number?: number | null
          match_time?: string | null
          side?: string | null
        }
        Relationships: []
      }
      yawara_cup_2024_scores: {
        Row: {
          created_at: string
          fighter_name: string
          id: string
          match_number: number
          points: number
          technique: string
          timestamp_ms: number
        }
        Insert: {
          created_at?: string
          fighter_name: string
          id?: string
          match_number: number
          points: number
          technique: string
          timestamp_ms: number
        }
        Update: {
          created_at?: string
          fighter_name?: string
          id?: string
          match_number?: number
          points?: number
          technique?: string
          timestamp_ms?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_user_nft_status: {
        Args: {
          user_uuid: string
        }
        Returns: boolean
      }
      create_profiles_table: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      entry_status: "pending" | "approved" | "rejected" | "cancelled"
      skill_level:
        | "ベーシック"
        | "ファンダメンタル"
        | "アドバンス"
        | "エキスパート"
        | "マスター"
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

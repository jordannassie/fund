/**
 * Auto-generated Supabase database types.
 * Run: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > types/database.types.ts
 *
 * This file is scaffolded for the 1B Project schema.
 * Connect your Supabase project and regenerate to get live types.
 */

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          username: string
          bio: string | null
          avatar_url: string | null
          invited_by: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          name: string
          username: string
          bio?: string | null
          avatar_url?: string | null
          invited_by?: string | null
        }
        Update: {
          id?: string
          updated_at?: string
          name?: string
          username?: string
          bio?: string | null
          avatar_url?: string | null
          invited_by?: string | null
        }
      }
      giving_records: {
        Row: {
          id: string
          created_at: string
          user_id: string
          amount: number
          note: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          amount: number
          note?: string | null
        }
        Update: {
          amount?: number
          note?: string | null
        }
      }
      badges: {
        Row: {
          id: string
          created_at: string
          user_id: string
          badge_name: string
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          badge_name: string
        }
        Update: never
      }
    }
    Views: {
      leaderboard_biggest_networks: {
        Row: {
          user_id: string
          name: string
          username: string
          network_size: number
          network_total_giving: number
          total_giving: number
        }
      }
      leaderboard_most_giving: {
        Row: {
          user_id: string
          name: string
          username: string
          total_giving: number
          network_total_giving: number
          network_size: number
        }
      }
    }
    Functions: {
      get_network_size: {
        Args: { user_id: string }
        Returns: number
      }
      get_network_giving: {
        Args: { user_id: string }
        Returns: number
      }
    }
    Enums: {}
  }
}

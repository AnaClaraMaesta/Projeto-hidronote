export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      anuencias: {
        Row: {
          caminho_arquivo: string | null
          chegou_anuencia: boolean
          id: number
          nome_arquivo: string | null
          protocolo_anuencia: string | null
          responsavel: string | null
          validade: string | null
        }
        Insert: {
          caminho_arquivo?: string | null
          chegou_anuencia?: boolean
          id?: number
          nome_arquivo?: string | null
          protocolo_anuencia?: string | null
          responsavel?: string | null
          validade?: string | null
        }
        Update: {
          caminho_arquivo?: string | null
          chegou_anuencia?: boolean
          id?: number
          nome_arquivo?: string | null
          protocolo_anuencia?: string | null
          responsavel?: string | null
          validade?: string | null
        }
        Relationships: []
      }
      clientes: {
        Row: {
          cpf_cnpj: string
          id: number
          nome: string
          sigarh: string
          status: Database["public"]["Enums"]["status"] | null
          telefone: string | null
        }
        Insert: {
          cpf_cnpj: string
          id?: number
          nome: string
          sigarh: string
          status?: Database["public"]["Enums"]["status"] | null
          telefone?: string | null
        }
        Update: {
          cpf_cnpj?: string
          id?: number
          nome?: string
          sigarh?: string
          status?: Database["public"]["Enums"]["status"] | null
          telefone?: string | null
        }
        Relationships: []
      }
      consumo_poco: {
        Row: {
          id: number
          id_poco: number
          quantidade_consumindo: number
          tipo_consumo: string
        }
        Insert: {
          id?: number
          id_poco: number
          quantidade_consumindo: number
          tipo_consumo: string
        }
        Update: {
          id?: number
          id_poco?: number
          quantidade_consumindo?: number
          tipo_consumo?: string
        }
        Relationships: [
          {
            foreignKeyName: "consumo_poco_id_poco_fkey"
            columns: ["id_poco"]
            isOneToOne: false
            referencedRelation: "poco"
            referencedColumns: ["id"]
          },
        ]
      }
      interessados: {
        Row: {
          cpf_cnpj: string
          id: number
          id_processos: number | null
          nome: string
        }
        Insert: {
          cpf_cnpj: string
          id?: number
          id_processos?: number | null
          nome: string
        }
        Update: {
          cpf_cnpj?: string
          id?: number
          id_processos?: number | null
          nome?: string
        }
        Relationships: [
          {
            foreignKeyName: "interessados_id_processos_fkey"
            columns: ["id_processos"]
            isOneToOne: false
            referencedRelation: "processo"
            referencedColumns: ["id"]
          },
        ]
      }
      outorgas: {
        Row: {
          caminho_arquivo: string | null
          chegou_outorga: boolean
          id: number
          nome_arquivo: string | null
          protocolo_outorga: string | null
          responsavel: string | null
          validade: string | null
        }
        Insert: {
          caminho_arquivo?: string | null
          chegou_outorga?: boolean
          id?: number
          nome_arquivo?: string | null
          protocolo_outorga?: string | null
          responsavel?: string | null
          validade?: string | null
        }
        Update: {
          caminho_arquivo?: string | null
          chegou_outorga?: boolean
          id?: number
          nome_arquivo?: string | null
          protocolo_outorga?: string | null
          responsavel?: string | null
          validade?: string | null
        }
        Relationships: []
      }
      poco: {
        Row: {
          cidade: string
          coordenada_x: string
          coordenada_y: string
          endereco: string
          id: number
          id_cliente: number
          numero_poco: number
          profundidade_m: number
          tipo: string
        }
        Insert: {
          cidade: string
          coordenada_x: string
          coordenada_y: string
          endereco: string
          id?: number
          id_cliente: number
          numero_poco: number
          profundidade_m: number
          tipo: string
        }
        Update: {
          cidade?: string
          coordenada_x?: string
          coordenada_y?: string
          endereco?: string
          id?: number
          id_cliente?: number
          numero_poco?: number
          profundidade_m?: number
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "poco_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
        ]
      }
      processo: {
        Row: {
          data_entrada: string | null
          id: number
          id_anuencia: number | null
          id_cliente: number | null
          id_interessado: number | null
          id_outorga: number | null
          id_poco: number | null
          pendencias: string | null
          tipo_documento: string | null
        }
        Insert: {
          data_entrada?: string | null
          id?: number
          id_anuencia?: number | null
          id_cliente?: number | null
          id_interessado?: number | null
          id_outorga?: number | null
          id_poco?: number | null
          pendencias?: string | null
          tipo_documento?: string | null
        }
        Update: {
          data_entrada?: string | null
          id?: number
          id_anuencia?: number | null
          id_cliente?: number | null
          id_interessado?: number | null
          id_outorga?: number | null
          id_poco?: number | null
          pendencias?: string | null
          tipo_documento?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "processo_id_anuencia_fkey"
            columns: ["id_anuencia"]
            isOneToOne: false
            referencedRelation: "anuencias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "processo_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "clientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "processo_id_interessado_fkey"
            columns: ["id_interessado"]
            isOneToOne: false
            referencedRelation: "interessados"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "processo_id_outorga_fkey"
            columns: ["id_outorga"]
            isOneToOne: false
            referencedRelation: "outorgas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "processo_id_poco_fkey"
            columns: ["id_poco"]
            isOneToOne: false
            referencedRelation: "poco"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      status: "PARCIAL" | "AGUARDO" | "DEFERIDO"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      status: ["PARCIAL", "AGUARDO", "DEFERIDO"],
    },
  },
} as const

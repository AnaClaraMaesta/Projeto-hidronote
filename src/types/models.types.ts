import type { Database } from '../types/database.types';

export type Cliente = Database['public']['Tables']['clientes']['Row'];

export type Processo = Database['public']['Tables']['processo']['Row'] & {
    interessados: {
        id: number;
        nome: string;
        cpf_cnpj: string;
    } | null,
    poco: {
        id: number,
        cidade: string,
        endereco: string,
        tipo: string,
        numero_poco: number,
        coordenada_X: number,
        coordenada_y: number,
        profundidade_m: number,
        id_cliente: number,
    } | null
};
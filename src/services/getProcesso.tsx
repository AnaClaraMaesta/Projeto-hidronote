import supabase from '../lib/database';
import type {Processo} from '../types/models.types';
import type { ApiResponse } from '../types/api.types';

export async function getProcessos(clienteId: number): Promise<ApiResponse<Processo[]>> {
    const {data, error} = await supabase
    .from('processo')
    .select(`
        *,
         interessados!processo_id_interessado_fkey(
        id,
        nome,
        cpf_cnpj),

        poco!processo_id_poco_fkey(
        id,
        cidade,
        endereco,
        tipo,
        numero_poco,
        coordenada_x,
        coordenada_y,
        profundidade_m,
        id_cliente
        )
    `)
    .eq('id_cliente', clienteId)

    if(error) return {success: false, data: null, error: error.message};
    return {success: true, data: data as Processo[], error: null};
//reafirmando o tipo data pro ts
}
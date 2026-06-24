import supabase from '../lib/database';
import type { Database } from '../types/database.types';
import type { ApiResponse } from '../types/api.types';

type Processo =  Database['public']['Tables']['processo']['Row'];

export async function getProcessos(clienteId: number): Promise<ApiResponse<Processo[]>> {
    const {data, error} = await supabase
    .from('processo')
    .select('*')
    .eq('id_cliente', clienteId)

    if(error) return {success: false, data: null, error: error.message};
    return {success: true, data, error: null};

}
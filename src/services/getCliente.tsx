import supabase from '../lib/database';
import type {Cliente} from '../types/models.types';
import type { ApiResponse } from '../types/api.types';

export async function getCliente(): Promise<ApiResponse<Cliente[]>>{
  const {data, error} = await supabase
  .from('clientes')
  .select('*')

    if(error) return {success: false, data: null, error: error.message};
    return {success: true, data, error: null};
}
import supabase from '../lib/database';
import type { Database } from '../types/database.types';
import type { ApiResponse } from '../types/api.types';


type Cliente = Database['public']['Tables']['clientes']['Row'];


export async function getCliente(): Promise<ApiResponse<Cliente[]>>{
  const {data, error} = await supabase
  .from('clientes')
  .select('*')

    if(error) return {success: false, data: null, error: error.message};
    return {success: true, data, error: null};
}
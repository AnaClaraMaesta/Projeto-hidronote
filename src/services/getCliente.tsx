import supabase from '../lib/database';

export async function getCliente() {
    const {data, error} = await supabase.from('clientes').select('*')

    if (error) return {success: false, error: error.message};
    return {success: true, data};
}

import supabase from '../lib/database';

export async function getProcessos() {
    const {data, error} = await supabase.from('processos').select('*')

    if(error) return {success: false, error: error.message};
    return {success: true, data};
}
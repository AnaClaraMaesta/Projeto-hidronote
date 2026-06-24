import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProcessos } from '../services/getProcesso';
import { getCliente } from '../services/getCliente';
import type { Database } from '../types/database.types';
import { useNavigate } from 'react-router-dom';

type Processo = Database['public']['Tables']['processo']['Row'];
type Cliente = Database['public']['Tables']['clientes']['Row'];

export function ProcessosListar(){
    const navigate = useNavigate();

    const { clienteId } = useParams<{ clienteId: string }>();
    const [processo, setProcessos] = useState<Processo[]>([]);
    const [cliente, setCliente] = useState<Cliente | null>(null);

    useEffect(() => {
        if (!clienteId) return;

        async function fetchData() {
        const [processoResult, clienteResult] = await Promise.all([ //dissipar duas buscas com promise all
            getProcessos(Number(clienteId)),
            getCliente(),
        ]);

        if (processoResult.success) setProcessos(processoResult.data);
        else console.error(processoResult.error);

        if (clienteResult.success) setCliente(clienteResult.data[0] ?? null);
        else console.error(clienteResult.error);
        }

        fetchData();
    }, [clienteId]);


    return(
        <div>

        <h2>Processos</h2>
        <h3>{cliente?.nome ?? 'Carregando...'}</h3>

        <ul>
            {processo.map((processo) => (
            <li key={processo.id}>
                <p>{cliente?.nome}</p>
                <p>{cliente?.cpf_cnpj}</p>
                <button
                onClick={()=>{
                    navigate(`/processo/${processo.id}`)
                }}
                className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded cursor-pointer"
                >
                    Abrir processo
                </button>
            </li>
            ))}
        </ul>
        </div>
  );
}
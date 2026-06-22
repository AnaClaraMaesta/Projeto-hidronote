import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProcessos } from '../services/getProcesso';
import { getCliente } from '../services/getCliente';
import type { Database } from '../types/database.types';

type Processo = Database['public']['Tables']['processo']['Row'];
type Cliente = Database['public']['Tables']['clientes']['Row'];

export function ProcessosListar(){
    const { clienteId } = useParams<{ clienteId: string }>();
    const [processos, setProcessos] = useState<Processo[]>([]);
    const [cliente, setCliente] = useState<Cliente | null>(null);

    useEffect(() => {
        if (!clienteId) return;

        async function fetchData() {
        const [processosResult, clienteResult] = await Promise.all([ //dissipar duas buscas com promise all
            getProcessos(Number(clienteId)),
            getCliente(Number(clienteId)),
        ]);

        if (processosResult.success) setProcessos(processosResult.data);
        else console.error(processosResult.error);

        if (clienteResult.success) setCliente(clienteResult.data);
        else console.error(clienteResult.error);
        }

        fetchData();
    }, [clienteId]);


    return(
        <div>
        <h2>Processos do cliente {cliente?.nome}</h2>
        <ul>
            {processos.map((processo) => (
            <li key={processo.id}>
                <p>{cliente?.nome}</p>
                <p>{cliente?.cpf_cnpj}</p>
                <button type="button">Abrir processo</button>
            </li>
            ))}
        </ul>
        </div>
  );
}
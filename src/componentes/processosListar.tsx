import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProcessos } from '../services/getProcesso';
import { getCliente } from '../services/getCliente';
import type { Processo, Cliente } from '../types/models.types';
import { useNavigate } from 'react-router-dom';

export function ProcessosListar(){
    const navigate = useNavigate();

    const { clienteId } = useParams<{ clienteId: string}>();
    const [processo, setProcessos] = useState<Processo[]>([]);
    const [cliente, setCliente] = useState<Cliente | null>(null);

    useEffect(() => {
        if (!clienteId) return;

        async function fetchData() {
            const [processoResult, clienteResult] = await Promise.all([ //dissipar duas buscas com promise all
                getProcessos(Number(clienteId)),
                getCliente(),
            ]);

            if (processoResult.success) setProcessos(processoResult.data ?? []);
            else console.error(processoResult.error);

            if (clienteResult.success) setCliente(clienteResult.data[0] ?? null);
            else console.error(clienteResult.error);
        }



        fetchData();
    }, [clienteId],);


 return(
    <div className='min-h-screen bg-gray-50 p-8'>


        <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold text-gray-800 mb-6'>
                <strong>Processos de {cliente?.nome ?? 'Carregando...'}</strong></h1>

            <div className="bg-white rounded-xl shadow overflow-hidden">

                <table className='w-full text-sm text-left text-gray-600'>
                    <thead className='bg-gray-100 text-gray-700 uppercase text-xs'>
                        <tr className='border-b-2 border-gray-300' >
                            <th className='px-6 py-4'>Nome</th>
                            <th className='px-6 py-4'>CPF/CNPJ</th>
                            <th className='px-6 py-4'>Endereço</th>
                            <th className='px-6 py-4'>Cidade</th>
                            <th className='px-6 py-4'>Interessado</th>
                            <th className='px-6 py-4'>N° do Poço</th>
                            <th className='px-6 py-4'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {processo.map((processo) =>(
                            <tr key={processo.id} className='border-b border-gray-200'>
                                <td className='px-6 py-4 font-medium text-gray-800'>{cliente?.nome}</td>
                                <td className='px-6 py-4'>{cliente?.cpf_cnpj}</td>
                                <td className='px-6 py-4'>{processo.poco?.endereco}</td>
                                <td className='px-6 py-4'>{processo.poco?.cidade}</td>
                                <td className='px-6 py-4'>
                                    <div className='font-medium text-gray-800'>{processo.interessados?.nome}</div>    
                                    <div className='text-xs text-gray-400 mt-0.5'>{processo.interessados?.cpf_cnpj}</div>
                                </td>
                                <td className='px-6 py-4'>{processo.poco?.numero_poco}</td>
                                <td className='px-6 py-4'>
                                    <button
                                    onClick={() =>
                                        navigate(`/arquivos/${processo.id}`)
                                    } 
                                    className='bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded transition-colors cursor-pointer'>
                                        ver arquivos
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>   
  );
}
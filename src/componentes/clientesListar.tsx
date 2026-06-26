import { useEffect, useState } from 'react';
import {getCliente }from '../services/getCliente';
import type {Cliente} from '../types/models.types';
import { useNavigate } from 'react-router-dom';

export default function ClienteListar(){
    const navigate = useNavigate();

    const [clientes, setClientes] = useState<Cliente[]>([]); //valor aceito e valor inicial

    useEffect(() => {
        async function fetchData() {
            const result = await getCliente();
            if(result.success) setClientes(result.data ?? []); //coalescencia nula , se return null / undefined, sua arrayVazio no lugar, n quebra o ts
            else console.log(result.error);

        }
        fetchData();
    },[]);

 return(
    <div className='min-h-screen bg-gray-50 p-8'>
        <div className='px-4 py-4'>    
            <button className="border-gray-700 bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded transition-colors cursor-pointer">
                Adicionar cliente
            </button>
        </div>


        <div className='max-w-7xl mx-auto'>

                
            <div className='bg-white rounded-xl shadow overflow-hidden'>

                <table className='w-full text-sm text-left text-gray-600'>
                    <thead className='bg-gray-100 text-gray-700 uppercase text-xs'>
                        <tr className="border-b-2 border-gray-300">
                        <th className="px-3 py-2]">Nome</th>
                        <th className="px-3 py-2">CPF</th>
                        <th className="px-3 py-2">Telefone</th>
                        <th className="px-3 py-2">Status</th>
                        <th className="px-3 py-2"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {clientes.map((cliente: Cliente) => (
                            <tr key={cliente.id} className="border-b border-gray-200">
                            <td className="px-3 py-2 font-medium text-gray-800">{cliente.nome}</td>
                            <td className="px-3 py-2">{cliente.cpf_cnpj}</td>
                            <td className="px-3 py-2">{cliente.telefone}</td>
                            <td className="px-3 py-2">{cliente.status}</td>
                            <td className="px-3 py-2">
                                <button
                                    onClick={() => 
                                        navigate(`/processos/${cliente.id}`)
                                    }
                                    className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded transition-colors cursor-pointer"
                                    >
                                    Abrir processos
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    
                </table>
            </div>
        </div>
    </div>
 )
}
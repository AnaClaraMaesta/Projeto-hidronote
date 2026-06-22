import { useEffect, useState } from 'react';
import {getCliente }from '../services/getCliente';
import type {Database} from '../types/database.types';
import { useNavigate } from 'react-router-dom';

type Cliente = Database['public']['Tables']['clientes']['Row'];

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
        <>
            <div>

            <button className="mt-3 ml-3 bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded cursor-pointer">
                Adicionar cliente
            </button>

            <div className="flex flex-col items-center justify-center mt-20">
                

                <table>
                <thead>
                    <tr className="border-b-2 border-gray-300">
                    <th className="p-3">Nome</th>
                    <th className="p-3">CPF</th>
                    <th className="p-3">Telefone</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map((cliente: Cliente) => (
                    <tr key={cliente.id} className="border-b border-gray-200">
                        <td className="p-3">{cliente.nome}</td>
                        <td className="p-3">{cliente.cpf_cnpj}</td>
                        <td className="p-3">{cliente.telefone}</td>
                        <td className="p-3">{cliente.status}</td>
                        <td className="p-3">
                        <button
                            onClick={() => 
                                navigate(`/processos/${cliente.id}`)
                            }
                            className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-4 rounded cursor-pointer"
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
        </>
    )
}
import { Router, type Request, type Response } from 'express'; //vertbatim exige explicitude no que é tipo e oq é valor
import pool from '../lib/database';
import type {Cliente} from '../types/models.types';
import type { ApiResponse } from '../types/api.types';

const getCliente = Router();

getCliente.get('/', async(req: Request, res: Response) => {

    try{
        const { rows } = await pool.query<Cliente>(`
        SELECT
            *
        FROM clientes
        `,);
        //$1 placeholder valor q eu vou colocar, dai o clienteId vai ali

        const response: ApiResponse<Cliente[]>={
            success: true,
            data: rows,
            error: null
        }

        res.json(response)
    }catch(err: unknown){
      const message = err instanceof Error ? err.message : 'Erro desconhecido';

        const response: ApiResponse<null> = {
            success: false,
            data: null,
            error: message,
        }

        res.status(500).json(response)
    }
});

export default getCliente;
import { Router, type Request, type Response } from 'express'; //vertbatim exige explicitude no que é tipo e oq é valor
import pool from '../lib/database';
import type {Processo} from '../types/models.types';
import type { ApiResponse } from '../types/api.types';

const getProcesso = Router();

getProcesso.get('/processos/:clientId', async(req: Request, res: Response) => {
    const {clienteId} = req.params;

    try{
        const { rows } = await pool.query<Processo>(`
        SELECT
            p.*,
            row_to_json(i) AS interessados,
            row_to_json(po) AS poco
        FROM processo p
        LEFT JOIN interessados i ON i.id = p.id_interessado
        LEFT JOIN poco po ON po.id = p.id_poco
        WHERE p.id_cliente = $1 
        `, [clienteId]);
        //$1 placeholder valor q eu vou colocar, dai o clienteId vai ali

        const response: ApiResponse<Processo[]>={
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

export default getProcesso;
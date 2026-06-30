import express from 'express';
import cors from 'cors';
import getProcesso from './services/getProcesso';
import getCliente from './services/getCliente';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/clientes', getCliente);
app.use('/processos/:clienteId', getProcesso)

app.listen(3001, () => console.log('http://localhost:3001'));
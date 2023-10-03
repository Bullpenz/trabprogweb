import express from 'express';
import bodyParser from 'body-parser';
import { Paciente, Secretaria, Consulta, Agenda } from './models';

const app = express();
app.use(bodyParser.json());

const pacientes: Paciente[] = [];
const secretarias: Secretaria[] = [];
const consultas: Consulta[] = [];
const agendas: Agenda[] = [];

// Rota para obter todos os pacientes
app.get('/pacientes', (req, res) => {
  res.json(pacientes);
});

// Rota para adicionar um novo paciente
app.post('/pacientes', (req, res) => {
  const { nomePaciente, senha, usuario } = req.body;
  const paciente = new Paciente(nomePaciente, senha, usuario);
  pacientes.push(paciente);
  res.status(201).json(paciente);
});

// Implemente rotas semelhantes para Secretarias, Consultas e Agendas conforme necessário

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Rotas para Secretarias
// Implemente as rotas para Secretarias da mesma forma que as dos Pacientes

// Rotas para Consultas
// Implemente as rotas para Consultas da mesma forma que as dos Pacientes

// Rotas para Agendas
// Implemente as rotas para Agendas da mesma forma que as dos Pacientes

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

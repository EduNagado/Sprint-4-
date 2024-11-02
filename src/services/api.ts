import { getAPIClient, RegisterResponse, simulateRegister } from "./axios";

export const api = getAPIClient()

export const registerUser = async (data: { name: string; email: string; password: string ;telefone: string;cpf: string;}): Promise<RegisterResponse> => {
    try {
        const response = await simulateRegister(data);
        return response;
    } catch (error) {
        throw error; 
    }
};

export default async function handler(req: any, res: any) {
    if (req.method === 'POST') {
      const { marca, modelo, placa, ano,  quilometragem   } = req.body;

      res.status(200).json({ message: 'Veículo cadastrado com sucesso', data: req.body });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  }
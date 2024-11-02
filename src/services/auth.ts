//Esse serviço fica inutil quando bater na api do java
//To usando para simular
import { api } from "@/services/api";
import { v4 as uuid } from 'uuid'

type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
    await delay();

    return {
        token: uuid(),
        user: {
            name: 'Eduardo Nagado',
            email: 'eduardo.nagado@gmail.com'
        }
    }
}

export async function recoverUserInformation() {
    await delay()

    return {
        user: {
            name: 'eduardo nagado',
            email: 'eduardo.nagado@gmail.com'
        }
    }
}



export async function registerRequest(data: {name:string; telefone: string;cpf: string; email: string; password: string }) {
    const response = await api.post('/register', data); // Ajuste a URL conforme sua API
    return response.data;
}

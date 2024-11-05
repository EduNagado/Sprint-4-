import { NextRequest, NextResponse } from "next/server"

interface UsuarioProps {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  cpf: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { nome, email, senha, telefone, cpf }: UsuarioProps = await request.json()

    if (!nome || !email || !senha || !telefone || !cpf) {
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios." },
        { status: 400 }
      )
    }

    const response = await fetch("http://localhost:8080/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha, telefone, cpf }),
    })

    if (response.ok) {
      const token = `token-for-${email}`
      return NextResponse.json({ token, message: "Usuário registrado com sucesso!" })
    } else {
      const textResponse = await response.text(); 
      console.log(textResponse); 

      let errorData;
      try {
        errorData = JSON.parse(textResponse); 
      } catch {
        errorData = { message: "Erro ao registrar usuário." }; 
      }

      return NextResponse.json(
        { message: errorData.message || "Erro ao registrar usuário." },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}

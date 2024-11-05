import { NextRequest, NextResponse } from "next/server"

type LoginResponse = {
  token?: string
  message?: string
}

interface UsuarioProps {
  codigo: number
  email: string
  senha: string
}

export async function POST(request: NextRequest): Promise<NextResponse<LoginResponse>> {
  try {
    const { email, senha }: { email: string; senha: string } = await request.json(); 

    if (!email || !senha) {
      return NextResponse.json(
        { message: "E-mail e senha são obrigatórios." },
        { status: 400 }
      )
    }

    const response = await fetch(`http://localhost:8080/login`);
    if (!response.ok) {
      return NextResponse.json(
        { message: "Erro ao buscar usuários." },
        { status: 500 }
      )
    }

    const users: UsuarioProps[] = await response.json()

    const user = users.find(user => user.email === email && user.senha === senha)

    if (user) {
      return NextResponse.json({ 
        token: `token-for-${email}`,
        codigo: user.codigo,
      })
    }

    return NextResponse.json(
      { message: "E-mail ou senha inválidos." },
      { status: 401 }
    )
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}

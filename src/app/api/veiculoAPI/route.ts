import { NextRequest, NextResponse } from "next/server"

interface VeiculoProps {
  usuario: string;
  marca: string;
  modelo: string;
  placa: string;
  ano: string;
  kmRodados: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { usuario, marca, modelo, placa, ano, kmRodados }: VeiculoProps = await request.json()

  
    if (!usuario || !marca || !modelo || !placa || !ano || !kmRodados) {
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios." },
        { status: 400 }
      )
    }


    const response = await fetch("http://localhost:8080/veiculos?Content-Type=application/json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, marca, modelo, placa, ano, kmRodados }),
    })


    if (response.ok) {
      return NextResponse.json({ message: "Veículo cadastrado com sucesso!" })
    } else {
      const textResponse = await response.text();
      console.log(textResponse); 

      let errorData;
      try {
        errorData = JSON.parse(textResponse); 
      } catch {
        errorData = { message: "Erro ao cadastrar veículo." }; 
      }

      return NextResponse.json(
        { message: errorData.message || "Erro ao cadastrar veículo." },
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

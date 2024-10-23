import "../../assets/Card.css";

export default function AreaDeAtuacao() {
  return (
    <div
      id="expertise"
      className="bg-sky-400 py-24 sm:py-32 flex flex-col gap-20"
    >
      <div id="AreaDeAtuacao" className="text-center">
        <h2 className="text-2xl font-bold">Nossas Áreas de Atuação</h2>
        <p className="mt-4">
          Em um cenário de constantes desafios no setor automotivo, nossa missão é proporcionar soluções que elevam a confiança dos clientes em diagnósticos e serviços. Com a Tecnologia Transparente de Diagnóstico de Veículos (TTDV), buscamos transformar a experiência do cliente, garantindo agilidade, precisão e transparência em cada etapa do processo.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap gap-10">
          {/* Card 1: Porto Seguro */}
          <div className={`card px-5 w-[370px] md:w-[400px] h-[250px] bg-sky-200 text-black`}>
            <div className="first-content">
              <p className="text-cyan-950">Parceria com a Porto Seguro</p>
            </div>
            <div className="second-content">
              <p className="font-medium text-[#64472c]">O que ela agrega</p>
              <ul className="w-[90%] flex flex-col gap-4 text-sm list-disc mx-auto">
                <li className="font-medium text-xs">
                  A Porto Seguro oferece segurança e confiança aos nossos clientes.
                </li>
                <li className="font-medium text-xs">
                  Suporte adicional para coberturas de seguros em serviços de diagnóstico e reparo.
                </li>
                <li className="font-medium text-xs">
                  Parceria que eleva a qualidade e a confiabilidade dos nossos serviços.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Inteligência Artificial */}
          <div className={`card px-5 w-[370px] md:w-[400px] h-[250px] bg-sky-200`}>
            <div className="  first-content">
              <p className="text-cyan-950">Inteligência Artificial para Diagnósticos Precisos</p>
            </div>
            <div className="second-content">
              <p className="font-medium text-[#64472c]">Como funciona</p>
              <ul className="w-[90%] list-disc flex flex-col gap-1">
                <li className="font-medium text-xs">
                  Análise de dados veiculares em tempo real para diagnósticos precisos.
                </li>
                <li className="font-medium text-xs">
                  Orçamentos preliminares instantâneos baseados em diagnósticos automatizados.
                </li>
                <li className="font-medium text-xs">
                  Exemplo: Identificação rápida de problemas no motor com base em dados históricos.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Automação da Gestão de Estoque */}
          <div className={`card px-5 w-[370px] md:w-[400px] h-[250px] bg-sky-200`}>
            <div className="  first-content">
              <p className="text-cyan-950">Automação da Gestão de Estoque</p>
            </div>
            <div className="second-content">
              <p className="font-medium text-[#64472c]">Como isso ajuda</p>
              <ul className="w-[90%] list-disc flex flex-col gap-1">
                <li className="font-medium text-xs">
                  Controle automatizado de estoque de peças para serviços de manutenção.
                </li>
                <li className="font-medium text-xs">
                  Monitoramento do consumo de peças e previsões de reposição.
                </li>
                <li className="font-medium text-xs">
                  Exemplo: Alertas para técnicos sobre peças em falta, permitindo planejamento proativo.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Redesenho da Jornada do Cliente */}
          <div className={`card px-5 w-[370px] md:w-[400px] h-[250px] bg-sky-200`}>
            <div className="first-content bg-tributo">
              <p className="text-cyan-950">Redesenho da Jornada do Cliente</p>
            </div>
            <div className="second-content">
              <p className="font-medium text-[#64472c]">O que fazemos</p>
              <ul className="w-[90%] list-disc flex flex-col gap-1">
                <li className="font-medium text-xs">
                  Simplificação dos processos de agendamento, diagnóstico e reparo.
                </li>
                <li className="font-medium text-xs">
                  Atualização contínua dos funcionários em novas tecnologias.
                </li>
                <li className="font-medium text-xs">
                  Comunicação em tempo real sobre o status dos serviços prestados.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

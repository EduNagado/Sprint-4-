import { CogIcon } from '@heroicons/react/20/solid';
import { LightBulbIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Automação em Ação.',
    description:
      'A automação agiliza nossos processos, gerenciando estoque, otimizando agendamentos e gerando orçamentos precisos, sempre com transparência.',
    icon: <CogIcon className='h-6 w-6 text-sky-600' />, 
  },
  {
    name: 'Inteligência Artificial para Diagnósticos',
    description: 'Nossa IA analisa dados em tempo real, oferecendo diagnósticos precisos e previsões que garantem decisões assertivas e maior confiança para o cliente.',
    icon: <LightBulbIcon className='h-6 w-6 text-sky-600' />, 
  },
];

export default function Ajuda() {
  return (
    <div id='ajuda' className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-sky-600">Como trabalhamos</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Automação e Inteligência
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Na MEF, buscamos oferecer diagnósticos veiculares precisos e confiáveis, integrando tecnologias avançadas em cada etapa do processo. Nosso objetivo é simplificar e otimizar a experiência de manutenção automotiva para nossos clientes.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <span aria-hidden="true" className="absolute left-1 top-1">
                        {feature.icon}
                      </span>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/imgHome/suportePorto.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}

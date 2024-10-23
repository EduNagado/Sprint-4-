const people = [
  {
    name: 'Eduardo Henrique S. Nagado',
    role: 'EduNagado',
    github: 'https://github.com/EduNagado',
    imageSrc: '/imgSobre/Edu.png',
  },
  {
    name: 'Felipe Silva Maciel',
    role: 'fesilva2109',
    github: 'https://github.com/fesilva2109',
    imageSrc: '/imgSobre/Lipe.png',
  },
  {
    name: 'Mateus Silveira Cezar',
    role: 'MateusSilveiraCezar',
    github: 'https://github.com/MateusSilveiraCezar',
    imageSrc: '/imgSobre/mateus.jpg',
  }
];

export default function Sobre() {
  return (
    <div id="sobre" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Nosso time
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Somos um grupo de programadores apaixonados pelo que fazemos e dedicados a entregar os melhores resultados para nossos clientes.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageSrc} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <a 
                    href={person.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold leading-6 text-sky-600 hover:underline"
                  >
                    {person.role}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

# Projeto de Site Interativo

Este projeto consiste em um site informativo e interativo desenvolvido em parceria com a Porto Seguro, que inclui uma inteligência artificial (IA) para auxiliar os usuários em questões automotivas. O site foi construído utilizando **Next.js** e **TypeScript**, com estilização feita em **Tailwind CSS**.

## Estrutura do Projeto

A estrutura do sistema está organizada da seguinte maneira:

- **src**: Contém a maior parte do código fonte do projeto.
  - **public**: Contém todas as imagens utilizadas no site.
  - **assets**: Inclui o CSS específico para os cards na página `AreaDeAtuacao`.
  - **components**: Onde estão localizados os componentes do Header e Footer do site.
  - **app**: Contém as principais páginas e funcionalidades do site, incluindo:
    - **ajuda**: Página dedicada à seção de ajuda.
    - **AreaDeAtuacao**: Informação sobre as áreas de atuação.
    - **CadastroCarro**: API implementada para o cadastro de veículos.
    - **home**: A página inicial, que contém o caminho para a interação com a IA.
    - **ia**: Local onde está implementado o chatbot.
    - **login**: Página que contém as funcionalidades de login e cadastro de usuários, com a API aplicada.
    - **sobre**: Informações sobre o projeto.
    - **WatsonChat**: Página dedicada ao bot do site.
  - **global.css**: Define a estilização global do site.
  - **layout**: Contém a configuração de SEO (metadados), fontes, favicon e estilos consistentes para todas as páginas. Ele mantém a estrutura HTML básica e renderiza cada página com `{children}`, garantindo consistência em toda a aplicação.

- **page.tsx**: Arquivo fora das pastas que contém a implementação das páginas do site.

## Estrutura da Pasta `api`

Dentro da pasta `src/api`, a estrutura foi reorganizada para gerenciar as funcionalidades de autenticação e cadastro de veículos:

- **cookie.ts**: Implementa a manipulação de cookies, útil para gerenciar tokens de autenticação e sessões de usuário.
- **loginApi.ts**: Contém métodos de login para a API.
- **registerApi.ts**: Inclui métodos para o registro de usuários na API.
- **veiculoApi.ts**: Responsável pelos métodos de cadastro de veículos na API.
## Pacotes Instalados

Para o funcionamento adequado do site, os seguintes pacotes foram instalados:

- `@heroicons/react`: Pacote de ícones para enriquecer a interface visual do site.
  ```bash
  npm install @heroicons/react

- `react-icons`: Uma biblioteca com diversos ícones para uso geral.
  ```bash
  npm install react-icons

- `@headlessui/react`: Fornece componentes interativos e acessíveis, como menus e diálogos, que facilitam a criação de uma interface amigável.
  ```bash
  npm install @headlessui/react

- `uuid`: Utilizado para a geração de identificadores únicos, essencial para o cadastro de novos elementos, como veículos.
  ```bashaxios
  npm install uuid

- `cookie`: Para facilitar o gerenciamento de cookies de autenticação.
  ```bash
  npm install cookie

- `nookies`: Auxilia na manipulação de cookies, o que é útil para gerenciar tokens de autenticação e sessões de usuário.
  ```bash
  npm install nookies


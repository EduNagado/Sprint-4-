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

## Conclusão

Este site tem como objetivo proporcionar uma experiência informativa e interativa, facilitando o acesso a informações automotivas através de uma interface amigável e apoiada por inteligência artificial.

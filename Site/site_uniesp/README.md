Site Uniesp:

Este projeto consiste no desenvolvimento de um site para a Faculdade Uniesp, utilizando React como biblioteca principal para a construção da interface.

-----------------------------------------------------------------------------------------------------------------------
Arquitetura do Projeto:

site_uniesp

Data

    - db.json
  
public

    Noticias
    
      - n1.jpg
      
      - n2.jpg
      
      - n3.jpg
      
    - uniesp.jpg
    
  src
  
    Components
    
      - Navbar.jsx
      
      - BannerAd.jsx
      
    Pages
    
      - Inicial.jsx
      
      - Faculdade.jsx
      
      - DpoLgpd.jsx
      
      - Noticias.jsx
      
      - VisualizaNoticia.jsx
      
        Admin
        
          - AdminNoticias.jsx
          
          - CadastroNoticia.jsx
          
          - EditarNoticia.jsx
          
    - App.jsx
    
    - main.jsx
    
  - index.html
  
  - package.json

  - vite.config.js
  
-----------------------------------------------------------------------------------------------------------------------

Funcionalidades Principais:

- Página Inicial: Apresentação geral da faculdade.
- DPO e LGPD: Informações detalhadas sobre proteção de dados.
- Notícias: Listagem de notícias com integração ao JSON Server.
- Administração de Notícias: Criar, editar e excluir notícias através de uma interface amigável.
-----------------------------------------------------------------------------------------------------------------------

Bibliotecas Utilizadas:

O projeto utiliza as seguintes bibliotecas:

- React: Biblioteca principal para construção da interface.
- React Router DOM: Gerenciamento de rotas.
- MUI (Material-UI): Componentes estilizados para layout e design responsivo.
- Axios: Integração com API para comunicação com o JSON Server.
- JSON Server: Simulação de um backend para o CRUD de notícias.
- Vite: Ferramenta para build e desenvolvimento rápido.
-----------------------------------------------------------------------------------------------------------------------

Guia de Configuração e Execução:
cd site_uniesp

Instale as dependências:
npm install vite@latest

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material --legacy-peer-deps

npm install react-router-dom

npm install json-server

npm install axios

npm run dev

npm run server

Acesse o projeto no navegador: O projeto estará disponível em http://localhost:5173.

-----------------------------------------------------------------------------------------------------------------------

Descrição dos Arquivos e Pastas:

Pasta Data
db.json: Arquivo JSON que simula o backend, armazenando as notícias.

Pasta public
Contém imagens públicas usadas no projeto, incluindo imagens das notícias.

Pasta src/Components
- Navbar.jsx: Barra de navegação principal com links para as páginas.
- BannerAd.jsx: Banner exibido na página inicial.

Pasta src/Pages
- Inicial.jsx: Página inicial do site.
- Faculdade.jsx: Informações sobre a faculdade.
- DpoLgpd.jsx: Página sobre a Lei Geral de Proteção de Dados.
- Noticias.jsx: Listagem de notícias dinâmicas.
- VisualizaNoticia.jsx: Detalhes de uma notícia selecionada.
  Admin/:
  - AdminNoticias.jsx: Gerenciamento das notícias (CRUD).
  - CadastroNoticia.jsx: Formulário para criar uma nova notícia.
  - EditarNoticia.jsx: Formulário para editar notícias existentes.

Arquivo App.jsx
Define as rotas principais do site e organiza os componentes compartilhados.

Arquivo index.html
Estrutura HTML principal onde o React renderiza o conteúdo.

Arquivo package.json
Lista as dependências e scripts do projeto.

-----------------------------------------------------------------------------------------------------------------------

Rotas do Sistema:

/: Página inicial.

/a-faculdade: Informações sobre a faculdade.

/dpo-lgpd: Página sobre a LGPD.

/noticias: Listagem de notícias.

/visualiza-noticia/:id: Detalhes de uma notícia.

/admin-noticias: Gerenciamento de notícias.

/cadastrar-noticia: Cadastro de novas notícias.

/editar-noticia/:id: Edição de notícias existentes.

-----------------------------------------------------------------------------------------------------------------------


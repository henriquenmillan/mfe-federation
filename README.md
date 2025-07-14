# mfe-federation

## Introdução

Projeto criado para gerenciar uma estrutura de Angular usando Module Federation. Possui 3 projetos front-end em Angular sendo:

1. Shell - Projetado para controlar e carregar os MFEs de forma dinâmica segundo a estrutura de Module Federation;
2. MFE-Cadastro - MFE responsável para preenchimento de formulário com os campos nome e e-mail para novos usuários;
3. MFE-Sucesso - MFE responsável para mensagem de sucesso do cadastro disponibilizando informações sobre o novo usuário cadastrado;

O Projeto possui também um back-end mockado para guardar a lista de usuários cadastrados;

##  Funcionalidades

- Cadastro de novos usuários com validações
- Exibição de tela de sucesso com dados do usuário
- Integração entre MFEs via Module Federation
- Integração com back-end Mockado

## Tecnologias

- Angular 18
- Module Federation
- Angular Material
- JSON Server
- TypeScript

## Desenvolvimento

1. Clonar repositório:
    https://github.com/henriquenmillan/mfe-federation

2. Instalar as dependências:
    ### Pré Requisitos

    - Node.js (versão 18 ou superior);
    - Angular CLI (versão 18 ou superior);

    npm install | npm i   

3. Rodando projeto:
    ### Pré Requisitos
    - Passo anterior;

    - npm run start:all -> Para rodar todos os projetos (ele irá executar os comandos: start:shell, start:mfe-cadastro, start:mfe-sucesso e start:json-server)
    
    - npm run start:shell -> Para rodar o projeto principal na porta 4200;
    - npm run start:mfe-cadastro -> Para rodar o MFE de Cadastro na porta 4201;
    - npm run start:mfe-sucesso -> Para rodar o MFE de Sucesso;
    - npm run start:json-server -> Para rodar o back-end mockado na porta 3000;

4. Executando aplicação:
    ### Pré Requisitos
    - Passo anterior (npm run start:all);

    Abrir o Navegador que preferir e abrir no endereço http://localhost:4200


## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.




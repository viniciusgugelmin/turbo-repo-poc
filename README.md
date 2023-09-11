# Comparação entre Tecnologias de Desenvolvimento

Neste projeto, realizamos uma POC para comparar três tecnologias de desenvolvimento: Turborepo, Vite e CRA (Create React App).

## Resumo da POC

- **Turborepo:**
    - Comando para instalar: `npx create-turbo@latest`
    - Tempo de instalação: 1m5,734s
    - Tamanho do projeto pós-instalação: 372 MB
    - Setup pós instalação: Typescript, Next, 2 projetos, 3 packages personalizados (ui, tsconfig, eslint-config-custom)
    - Tempo para primeira inicialização: 0m22,514s
    - Tempo para segunda inicialização: 0m11,036s
    - Tempo para primeiro build: 1m4,473s
    - Tempo para segundo build: 0m2,956s (build com cache)

- **Vite:**
    - Comando para instalar: `npx vite@latest`
    - Tempo de instalação: 0m8,941s + 0m11,426s (npm i)
    - Tamanho do projeto pós-instalação: 48,0 MB
    - Setup pós instalação: Javascript, React, 1 projeto, eslint
    - Tempo para primeira inicialização: 0m7,430s
    - Tempo para segunda inicialização: 0m2,463s
    - Tempo para primeiro build: 0m2,805s
    - Tempo para segundo build: -

- **CRA (Create React App):**
    - Comando para instalar: `npx create-react-app cra`
    - Tempo de instalação: 1m54,599s
    - Tamanho do projeto pós-instalação: 229 MB
    - Setup pós instalação: Javascript, React, 1 projeto, testing-library
    - Tempo para primeira inicialização: 1m12,895s
    - Tempo para segunda inicialização: 0m6,793s
    - Tempo para primeiro build: 0m21,886s
    - Tempo para segundo build: -

## Conclusões

- O Turborepo possui um tempo de instalação mais longo e um tamanho de projeto significativamente maior devido à configuração inicial complexa. Ele não só traz um projeto para desenvolvimento com base React, mas sim, um ambiente completo de desenvolvimento já com Next, Typescript, Eslint, e uma séria de ferramentas e configurações já pré-definidas, facilitando tanto o desenvolvimento quanto o build e deploy.
- Vite se destaca com tempos de inicialização e build mais rápidos, tornando-o uma escolha eficiente para projetos com base React, Vue, Svelte ou Vanilla JS, mas com uma configuração mais simples e customizável.
- CRA é uma opção fácil de usar, mas tem tempos de instalação e build mais longos em comparação com Vite e Turborepo. Já vem com uma configuração pré-definida, mas com menos opções de customização.

## Testes Realizados no Turborepo

Durante o desenvolvimento da POC no Turborepo, realizamos uma série de testes para avaliar seu desempenho e capacidades. Aqui estão os principais resultados e observações:

1. **Integração com Vite:**
  - Utilizamos o Vite dentro das aplicações do Turborepo e notamos que o desenvolvimento dentro dele não se distancia muito de aplicações Vite convencionais. O Turborepo concentra todas as aplicações em um único terminal, facilitando o debug, visualização de hot reload de aplicação alterada e o processo de inicialização de aplicações.

2. **Compartilhamento de Código:**
  - Testamos o compartilhamento de código com componentes de UI, estado e configurações básicas (eslint, viteconfig, etc.). Funciona como um compartilhamento de código "buildado", mas em tempo real, sem perder performance em desenvolvimento. Não interfere na experiência de desenvolvimento com Vite ou CRA, apenas facilita o desenvolvimento e o build de aplicações microfrontend.

3. **Sistema de Cache:**
  - O Turborepo possui um sistema de cache eficiente que previne a releitura e "rebuild" de código que ocorreria de um dia para o outro ou em execuções subsequentes. Ele armazena o estado do último build/serve de cada aplicação individualmente, economizando bastante tempo.

4. **Compartilhamento de Variáveis de Ambiente:**
  - Além de facilitar o compartilhamento de código, o Turborepo pode compartilhar variáveis de ambiente, se necessário. Ele fornece acesso ao arquivo .env de cada aplicação individualmente, bem como ao escopo global do projeto.

5. **Mistura de Aplicações:**
  - Testamos a mistura de diferentes tipos de aplicações (Vite <> Next; JS <> TS) e não encontramos problemas durante os testes. Pelo contrário, identificamos vantagens em sua flexibilidade.

6. **Gerenciamento Individual ou Coletivo:**
  - O Turborepo não apenas liga as aplicações microfrontend, mas também pode lidar com elas separadamente. Isso permite definir o escopo do build ou serve desejado, o que é útil quando se deseja atualizar apenas um aplicativo em produção.

7. **Sólido e Reconhecido no Mercado:**
  - Apesar de ser relativamente novo no mercado, o Turborepo já se mostrou bastante sólido e é amplamente utilizado para substituir tanto aplicações monorepo legadas quanto como uma nova solução para microfrontend. É bem reconhecido em fóruns do Linkedin, Reddit e fóruns exclusivos de desenvolvedores. Existe até uma alternativa semelhante, o Nx, que segue um caminho de configurações mais pré-definidas e menos customizáveis.

Estas observações destacam os pontos fortes do Turborepo e as vantagens que ele pode oferecer no desenvolvimento de aplicações microfrontend.

## Como Executar os Testes

Para executar os testes automatizados e verificar esses resultados por conta própria, siga os passos abaixo:

1. **Instalar a tecnologia escolhida:**
    - Turborepo: `time npx create-turbo@latest`
    - Vite: `time npx vite@latest`
    - CRA (Create React App): `time npx create-react-app cra`

2. **Inicie o projeto e registre os tempos de inicialização e build.**

Lembre-se de adaptar a escolha da tecnologia com base nas suas necessidades específicas.

## Referências

- [Turborepo GitHub](https://github.com/turborepo/turborepo)
- [Vite GitHub](https://github.com/vitejs/vite)
- [Create React App GitHub](https://github.com/facebook/create-react-app)

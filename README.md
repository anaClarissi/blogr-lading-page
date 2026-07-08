# Blogr Landing Page

Solução para o desafio **Blogr landing page** da plataforma [Frontend Mentor](https://www.frontendmentor.io), desenvolvida com **Vite**, **Bootstrap** e **CSS puro**, para fins de estudo e composição de portfólio. Este projeto não possui fins lucrativos — foi desenvolvido exclusivamente por aprendizado.

### 🔗 [**Acesse o site aqui →**](https://blogr-lading-page-liard.vercel.app/)

![Preview do projeto](/design/preview.jpg)

## 📋 Sumário

- [Visão geral](#-visão-geral)
- [Links](#-links)
- [Meu processo](#-meu-processo)
  - [Ferramentas utilizadas](#ferramentas-utilizadas)
  - [O que aprendi](#o-que-aprendi)
  - [Recursos úteis](#recursos-úteis)
- [Autora](#-autora)

## 🎯 Visão geral

O desafio consistiu em construir uma landing page responsiva a partir de um design fornecido pelo Frontend Mentor, reproduzindo fielmente o layout para telas mobile e desktop, incluindo um menu de navegação com dropdowns e um comportamento customizado no menu hambúrguer.

### Links

- **🌐 Site em produção (Vercel): [blogr-lading-page-liard.vercel.app](https://blogr-lading-page-liard.vercel.app/)**

- Desafio no Frontend Mentor: [frontendmentor.io/challenges/blogr-landing-page](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP)

- Meu perfil no Frontend Mentor: [frontendmentor.io/profile/anaClarissi](https://www.frontendmentor.io/profile/anaClarissi)

> Este foi o primeiro projeto do meu portfólio que fiz deploy usando a **Vercel**. Os desafios anteriores foram publicados via **GitHub Pages**, então essa foi também uma oportunidade de aprender um novo fluxo de deploy.

## 🛠 Meu processo

### Ferramentas utilizadas

- **Vite** como bundler e ambiente de desenvolvimento
- **Bootstrap 5** (grid, componentes de navbar e dropdown, e o JS bundle para o comportamento de collapse/dropdown)
- **CSS3** com variáveis customizadas (`:root`) para cores, fontes e valores reutilizáveis como `--border-radius`
- **Mobile-first workflow**, com breakpoints em `60em` (960px) e `80em` / `90em` para telas maiores
- Google Fonts (`Ubuntu` e `Overpass`)
- Deploy com **Vercel**

### O que aprendi

Construir esse projeto me ajudou a fixar e aprofundar diversos conceitos de front-end:

- **Organização de variáveis CSS por categoria**: separar cores, fontes e valores de layout em blocos comentados dentro do `:root` deixou o arquivo `style.css` muito mais fácil de manter e reaproveitar entre as seções do site.

- **Integração entre Bootstrap e CSS customizado**: usei os componentes de `navbar`, `collapse` e `dropdown` do Bootstrap como base estrutural e comportamental, mas sobrescrevi praticamente toda a estilização visual com CSS próprio, o que me fez entender melhor como o Bootstrap monta suas classes internamente (como `.show`, `.collapsing`, `data-bs-toggle`) para poder estilizá-las sem quebrar a lógica do JS do framework.

- **Manipulação de eventos do Bootstrap via JavaScript**: implementei a troca do ícone do menu hambúrguer (de "menu" para "fechar") escutando os eventos nativos do Bootstrap `show.bs.collapse` e `hidden.bs.collapse`, ao invés de recriar essa lógica manualmente. Isso me mostrou a importância de conhecer a API de eventos de uma biblioteca antes de tentar reescrever comportamentos que ela já oferece.

- **Imagens responsivas com `<picture>` e `srcset`**: usei a tag `<picture>` com `source media=""` para servir diferentes SVGs de background e ilustrações de acordo com o tamanho da tela, evitando carregar imagens desnecessárias no mobile.

- **Efeitos visuais com `border-radius` assimétrico e gradientes**: o layout do Blogr usa cantos arredondados apenas em lados específicos das seções (`border-bottom-left-radius`, `border-top-right-radius`) combinados com `linear-gradient`, o que exigiu bastante ajuste de `overflow: hidden` e posicionamento absoluto para as imagens de fundo não vazarem para fora dos containers arredondados.

- **Uso de `:has()` em seletores CSS**: utilizei o seletor moderno `.dropdown:has(.dropdown-menu.show)` para estilizar o botão do dropdown com base no estado do menu que ele controla, sem precisar de JavaScript adicional para isso.

- **Organização de estilos por seções e breakpoints**: estruturar o CSS com comentários delimitando cada seção (`HEADER`, `MAIN`, `FOOTER`) e blocos de media query separados por dispositivo tornou a manutenção e a leitura do código muito mais organizadas à medida que o projeto crescia.

- **Fluxo de build com Vite**: configurar um projeto Vite do zero, importando CSS, JS e assets como o Bootstrap via `node_modules`, além de usar imports relativos para os ícones SVG dentro do JavaScript.

- **Deploy com Vercel**: aprendi um fluxo de publicação diferente do GitHub Pages, entendendo como a Vercel identifica automaticamente projetos Vite e gera a build de produção.

### Recursos úteis

- [Documentação do Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) — para entender o funcionamento interno dos componentes de navbar e collapse.
- [MDN Web Docs](https://developer.mozilla.org/) — para consultar a tag `<picture>` e o seletor `:has()`.
- [Documentação do Vite](https://vitejs.dev/) — para configuração do ambiente de desenvolvimento.

## 👩‍💻 Autora

- Frontend Mentor - [@anaClarissi](https://www.frontendmentor.io/profile/anaClarissi)

- Linkedin - [Ana Clarissi](https://www.linkedin.com/in/anaclarissi)
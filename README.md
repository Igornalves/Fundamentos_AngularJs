# 📚 Conceitos Básicos do Angular

Projeto desenvolvido com o objetivo de estudar e praticar os **conceitos fundamentais do Angular**, desde a criação e organização de componentes até conceitos como templates, data binding, diretivas, serviços e organização de projetos.

Este projeto serve como material de estudo e referência para criação de aplicações Angular de forma organizada e padronizada.

---

## 🚀 Tecnologias utilizadas

* [Angular](https://angular.dev/)
* TypeScript
* HTML5
* CSS3
* Node.js
* Angular CLI

---

# 📁 Estrutura do projeto

Uma estrutura recomendada para organizar o projeto:

```text
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   └── card/
│   │
│   ├── pages/
│   │   ├── home/
│   │   └── about/
│   │
│   ├── services/
│   │   └── exemplo.service.ts
│   │
│   ├── models/
│   │   └── exemplo.model.ts
│   │
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.config.ts
│   └── app.routes.ts
│
├── assets/
│
├── index.html
├── main.ts
└── styles.css
```

## 📂 Principais pastas

### `app/`

É onde fica a maior parte da aplicação Angular.

Dentro dela ficam componentes, páginas, serviços, modelos, rotas e configurações da aplicação.

---

### `components/`

Pasta destinada aos **componentes reutilizáveis** da aplicação.

Exemplos:

```text
components/
├── header/
├── footer/
├── navbar/
├── button/
└── card/
```

Um componente normalmente possui arquivos como:

```text
header/
├── header.component.ts
├── header.component.html
└── header.component.css
```

---

### `pages/`

Utilizada para componentes que representam **páginas da aplicação**.

Exemplo:

```text
pages/
├── home/
├── about/
├── login/
└── dashboard/
```

A diferença conceitual é:

* `components/` → elementos reutilizáveis.
* `pages/` → telas ou páginas completas da aplicação.

---

### `services/`

Local onde ficam os **serviços Angular**.

Os serviços podem ser utilizados para:

* comunicação com APIs;
* compartilhamento de dados;
* regras de negócio;
* autenticação;
* operações reutilizáveis.

Exemplo:

```text
services/
└── user.service.ts
```

---

### `models/`

Pode ser utilizada para armazenar interfaces e modelos TypeScript.

Exemplo:

```typescript
export interface User {
  id: number;
  name: string;
  email: string;
}
```

---

### `assets/`

Arquivos estáticos da aplicação.

Exemplo:

```text
assets/
├── images/
├── icons/
└── fonts/
```

---

# 🧩 O que é um componente Angular?

Um componente é uma das principais partes de uma aplicação Angular.

Ele normalmente possui:

```text
Componente
├── TypeScript
├── HTML
└── CSS
```

O TypeScript controla a lógica:

```typescript
export class HeaderComponent {
  title = 'Meu Header';
}
```

O HTML define a interface:

```html
<h1>{{ title }}</h1>
```

E o CSS define a aparência:

```css
h1 {
  font-size: 24px;
}
```

---

# 🛠️ Angular CLI

O **Angular CLI** facilita a criação e manutenção da aplicação.

Verificar a versão:

```bash
ng version
```

ou:

```bash
ng v
```

---

# 📦 Criando um novo projeto

Para criar um projeto Angular:

```bash
ng new nome-do-projeto
```

Exemplo:

```bash
ng new conceitos-angular
```

Entrar na pasta:

```bash
cd conceitos-angular
```

Executar o projeto:

```bash
ng serve
```

Ou:

```bash
npm start
```

Normalmente a aplicação ficará disponível em:

```text
http://localhost:4200
```

---

# 🧱 Criando componentes

Para criar um componente:

```bash
ng generate component nome-do-componente
```

Forma abreviada:

```bash
ng g c nome-do-componente
```

Exemplo:

```bash
ng g c components/header
```

O Angular CLI criará automaticamente a estrutura correspondente.

---

# 📁 Criando componentes já organizados em pastas

Uma das formas mais interessantes de manter o projeto organizado é informar o caminho completo:

```bash
ng g c components/header
```

Resultado:

```text
components/
└── header/
    ├── header.component.ts
    ├── header.component.html
    ├── header.component.css
    └── header.component.spec.ts
```

Outro exemplo:

```bash
ng g c components/footer
```

E:

```bash
ng g c components/card
```

Resultado:

```text
components/
├── header/
├── footer/
└── card/
```

---

# 📄 Criando páginas

Podemos utilizar o mesmo conceito para organizar páginas:

```bash
ng g c pages/home
```

```bash
ng g c pages/about
```

```bash
ng g c pages/contact
```

Resultado:

```text
pages/
├── home/
├── about/
└── contact/
```

---

# ⚙️ Criando serviços

Para criar um serviço:

```bash
ng generate service services/exemplo
```

Forma abreviada:

```bash
ng g s services/exemplo
```

Resultado:

```text
services/
└── exemplo.service.ts
```

Exemplo:

```bash
ng g s services/user
```

Resultado:

```text
services/
└── user.service.ts
```

---

# 🧠 Criando interfaces

Interfaces podem ser utilizadas para representar os dados da aplicação.

Exemplo:

```bash
ng g interface models/user
```

Resultado:

```text
models/
└── user.ts
```

Exemplo de interface:

```typescript
export interface User {
  id: number;
  name: string;
  email: string;
}
```

---

# 🛣️ Rotas

As rotas são responsáveis por definir quais páginas serão exibidas para cada URL.

Exemplo:

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
```

Podemos ter:

```text
/
```

para a página inicial e:

```text
/about
```

para a página About.

---

# 🔗 Data Binding

O Angular possui diferentes formas de comunicação entre o componente e o template.

## Interpolação

Utilizada para mostrar valores do TypeScript no HTML:

```html
<h1>{{ title }}</h1>
```

No TypeScript:

```typescript
title = 'Aprendendo Angular';
```

---

## Property Binding

Permite associar uma propriedade HTML a uma variável:

```html
<img [src]="imageUrl">
```

---

## Event Binding

Permite responder a eventos:

```html
<button (click)="mostrarMensagem()">
  Clique aqui
</button>
```

No componente:

```typescript
mostrarMensagem() {
  console.log('Botão clicado!');
}
```

---

## Two-Way Data Binding

Permite sincronizar dados entre o componente e o template.

Exemplo:

```html
<input [(ngModel)]="nome">
```

---

# 🔀 Diretivas

Diretivas permitem alterar o comportamento ou a estrutura do HTML.

Alguns exemplos conhecidos:

```html
@if
@for
```

Exemplo:

```html
@if (usuarioLogado) {
  <p>Usuário conectado</p>
}
```

Exemplo utilizando `@for`:

```html
@for (usuario of usuarios; track usuario.id) {
  <p>{{ usuario.name }}</p>
}
```

---

# 📡 Comunicação entre componentes

Componentes podem receber e enviar informações.

Um componente pai pode enviar dados para um componente filho utilizando `input`.

Exemplo conceitual:

```typescript
title = 'Meu título';
```

E no template:

```html
<app-card [title]="title"></app-card>
```

Essa comunicação é importante para criar componentes reutilizáveis.

---

# 🔄 Ciclo de vida dos componentes

Os componentes Angular possuem um ciclo de vida.

Um dos hooks mais conhecidos é:

```typescript
ngOnInit()
```

Exemplo:

```typescript
import { Component, OnInit } from '@angular/core';

export class HomeComponent implements OnInit {

  ngOnInit(): void {
    console.log('Componente inicializado');
  }

}
```

O `ngOnInit()` é executado durante a inicialização do componente.

---

# 📋 Comandos importantes do Angular CLI

## Criar projeto

```bash
ng new nome-do-projeto
```

## Executar projeto

```bash
ng serve
```

## Executar e abrir no navegador

```bash
ng serve --open
```

## Criar componente

```bash
ng g c nome
```

## Criar componente dentro de uma pasta

```bash
ng g c components/nome
```

## Criar serviço

```bash
ng g s services/nome
```

## Criar interface

```bash
ng g interface models/nome
```

## Criar classe

```bash
ng g class models/nome
```

## Criar guard

```bash
ng g guard guards/auth
```

## Criar pipe

```bash
ng g pipe pipes/nome
```

## Criar diretiva

```bash
ng g directive directives/nome
```

---

# 🧹 Organização recomendada

Uma organização inicial pode ser:

```text
app/
├── components/
│   ├── header/
│   ├── footer/
│   └── card/
│
├── pages/
│   ├── home/
│   └── about/
│
├── services/
│   └── user.service.ts
│
├── models/
│   └── user.ts
│
├── guards/
│
├── pipes/
│
├── directives/
│
├── app.component.ts
├── app.config.ts
└── app.routes.ts
```

A ideia é separar cada responsabilidade.

**Componentes** cuidam da interface.

**Pages** representam telas.

**Services** concentram funcionalidades reutilizáveis e comunicação com dados/API.

**Models** representam os formatos dos dados.

**Guards** podem controlar acesso às rotas.

**Pipes** transformam ou formatam valores no template.

**Directives** adicionam comportamentos aos elementos.

---

# 🧪 Ambiente de desenvolvimento

Verificar Node.js:

```bash
node -v
```

Verificar npm:

```bash
npm -v
```

Verificar Angular CLI:

```bash
ng version
```

Caso o Angular CLI não esteja instalado:

```bash
npm install -g @angular/cli
```

Depois:

```bash
ng version
```

---

# ▶️ Executando o projeto

Depois de clonar ou criar o projeto:

```bash
npm install
```

Depois:

```bash
ng serve
```

Ou:

```bash
npm start
```

A aplicação poderá ser acessada normalmente pelo navegador através da porta padrão do servidor de desenvolvimento.

---

# 📚 Objetivos deste projeto

Este projeto tem como objetivo estudar:

* [x] Estrutura de projetos Angular
* [x] Angular CLI
* [x] Criação de componentes
* [x] Organização de pastas
* [x] Templates
* [x] Interpolação
* [x] Property Binding
* [x] Event Binding
* [x] Two-Way Data Binding
* [x] Diretivas
* [x] Comunicação entre componentes
* [x] Serviços
* [x] Interfaces
* [x] Rotas
* [x] Ciclo de vida dos componentes
* [ ] Consumo de APIs
* [ ] Formulários
* [ ] HTTP Client
* [ ] Signals
* [ ] RxJS
* [ ] Autenticação

---

# 🎯 Objetivo final

O objetivo é utilizar este projeto como uma **base de estudos para Angular**, adicionando novos exemplos e conceitos conforme o aprendizado evolui.

A ideia é manter o projeto simples no início e aumentar sua complexidade gradualmente, permitindo compreender como uma aplicação Angular é estruturada desde os conceitos fundamentais.

---

## 👨‍💻 Autor

**Igor Nascimento**

> 📖 Projeto desenvolvido para estudos e aprendizado de Angular.

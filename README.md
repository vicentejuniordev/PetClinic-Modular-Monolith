# PetClinic-Modular-Monolith
Um projeto de estudo para o entedimento e aprofudamento da arquitetura Monolítica Modular.

#### Entendendo a Arquitetura Monolítica Modular 🏛️
Essa arquitetura parte do principio de um monólito (apenas um app/modulo), mas o que faz o diferencial dela é justamente a modularidade, onde também podemos encontrar esses aspectos em outras arquiteturas. Na arquitetura em estudo podemos observar que mesmo com o acoplamento por conta de ser um único projeto, os módulos permitem que possamos deixar nossa aplicação divida em partes menores, aumentando a coesão e diminuindo o acoplamento da aplicação.

#### Organização de pastas usadas no PetClinic 📁

Nesse exemplo abaixo podemos observar que dividimos o projeto geral em duas partes a pasta `apps` onde está situada as nossas aplicações de frontend e backend. Na pasta `packages` podemos entender que ele é usada para organizar os pacotes/módulos da nossa aplicação, sendo necessário identificar os domínios e partir deles dividir a aplicação nesse modelo, consequetemente deixando ela com um baixo acoplamento por conta dos módulos.

```text
petclinic/
 |-apps
   |- backend -> Aplicação Backend
   |- frontend -> Aplicação Frontend
 |-packages/
   |- vet -> Módulo responsável pelo domínio Veterinários
```
#### Tecnologias usadas no projeto 📁
[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](#)
[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![Pop!_OS](https://img.shields.io/badge/Pop!__OS-48B9C7?logo=popos&logoColor=fff)](#)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](#)

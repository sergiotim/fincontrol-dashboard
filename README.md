# 💰 FinControl - Dashboard Financeiro

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

> Um dashboard financeiro moderno e responsivo para gestão de receitas, despesas e clientes.

## 📸 Preview

![Preview do Projeto](https://via.placeholder.com/800x400?text=Preview+do+FinControl+Dashboard)

## 🚀 Sobre o Projeto

O **FinControl** é uma aplicação front-end desenvolvida para simular o controle financeiro de uma empresa ou freelancer. O objetivo principal deste projeto foi aplicar conceitos de modularização com **React**, tipagem estática com **TypeScript** e criação de visualizações de dados interativas.

### Principais Funcionalidades

- 📊 **Dashboard Interativo:** KPIs de Receita, Despesa e Lucro em tempo real.
- 📈 **Gráficos Visuais:**
  - Evolução financeira semestral (AreaChart).
  - Distribuição de despesas por categoria (PieChart).
- 💸 **Gestão de Transações:** Listagem com filtros por status (Pago, Pendente, Atrasado).
- 👥 **Gestão de Clientes:** Interface para visualizar e gerenciar a base de clientes.
- 📱 **Design Responsivo:** Layout adaptável para desktop e mobile com Menu Lateral (Sidebar).

## 🛠️ Tecnologias Utilizadas

- **[React](https://reactjs.org/)** - Biblioteca para construção de interfaces.
- **[Vite](https://vitejs.dev/)** - Build tool rápida e leve.
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript com superpoderes (tipagem).
- **[Bootstrap 5](https://getbootstrap.com/)** - Framework CSS para estilização e grid.
- **[Recharts](https://recharts.org/)** - Biblioteca para criação de gráficos compostos.
- **[Lucide React](https://lucide.dev/)** - Ícones leves e modernos.

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura modular para facilitar a manutenção e escalabilidade:

```bash
src/
├── components/       # Componentes reutilizáveis
│   ├── layout/       # Componentes estruturais (Sidebar, Header)
│   └── shared/       # Componentes genéricos (Cards, Modais)
├── data/             # Mock Data (Dados simulados para desenvolvimento)
├── pages/            # Páginas da aplicação (Dashboard, Financeiro, Clientes)
├── types/            # Definições de tipos TypeScript (Interfaces)
├── utils/            # Funções utilitárias e formatadores
├── App.tsx           # Componente raiz e gerenciamento de estado global
└── main.tsx          # Ponto de entrada

```

⚡ Como Rodar o Projeto
Pré-requisitos

Você precisa ter o Node.js instalado em sua máquina.
Passo a passo

    Clone o repositório
    Bash

git clone [https://github.com/sergiotim/fincontrol-dashboard.git](https://github.com/sergiotim/fincontrol-dashboard.git)

Entre na pasta do projeto
Bash

cd fincontrol-dashboard

Instale as dependências
Bash

npm install

Inicie o servidor de desenvolvimento
Bash

    npm run dev

    Acesse no navegador O projeto estará rodando em http://localhost:5173.

🔜 Melhorias Futuras

    [ ] Implementar React Router DOM para rotas reais.

    [ ] Conectar com um Back-End (Node.js/NestJS) ou Firebase.

    [ ] Adicionar autenticação de usuário.

    [ ] Modo Dark/Light theme.

🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
📝 Licença

Este projeto está sob a licença MIT.

Feito com 💙 por Sérgio Timoteo
💰 FinControl - Dashboard Financeiro

Um dashboard financeiro moderno, modular e responsivo para gestão de receitas, despesas e clientes.

📸 Preview

<!-- Dica: Tire um print da sua tela, salve como 'preview.png' na pasta 'public' e descomente a linha abaixo -->

<!--  -->

<img src="https://www.google.com/search?q=https://via.placeholder.com/800x400%3Ftext%3DPreview%2Bdo%2BFinControl%2BDashboard" alt="Preview do Projeto" width="100%">

🚀 Sobre o Projeto

O FinControl é uma aplicação front-end desenvolvida para simular o controle financeiro de uma pequena empresa ou freelancer.

O objetivo principal deste projeto foi refatorar uma aplicação monolítica, aplicando conceitos de Clean Code e Arquitetura Modular com React e TypeScript, garantindo escalabilidade e facilidade de manutenção.

Principais Funcionalidades

📊 Dashboard Interativo: Visualização de KPIs (Receita, Despesa, Lucro) em tempo real.

📈 Visualização de Dados:

Gráfico de área para evolução financeira semestral.

Gráfico de pizza para distribuição de despesas por categoria.

💸 Gestão de Transações: Listagem detalhada com filtros de status (Pago, Pendente, Atrasado).

👥 Módulo de Clientes: Interface para visualização, adição e gestão de clientes.

📱 Interface Responsiva: Layout adaptável com Sidebar colapsável para mobile e desktop.

🛠️ Tecnologias Utilizadas

React - Biblioteca JavaScript para construção de interfaces.

Vite - Ferramenta de build rápida e leve.

TypeScript - Superset do JavaScript que adiciona tipagem estática.

Bootstrap 5 - Framework CSS para estilização ágil e responsiva.

Recharts - Biblioteca de gráficos compostos para React.

Lucide React - Biblioteca de ícones moderna e leve.

📂 Estrutura do Projeto

O projeto foi organizado seguindo boas práticas de separação de responsabilidades:

src/
├── components/       # Componentes de UI
│   ├── layout/       # Componentes estruturais (Sidebar, Header)
│   └── shared/       # Componentes reutilizáveis (Cards, Modais)
├── data/             # Mock Data (Dados simulados para desenvolvimento)
├── hooks/            # Hooks customizados do React
├── pages/            # Visualizações principais (Dashboard, Financeiro, Clientes)
├── types/            # Definições de interfaces e tipos TypeScript
├── utils/            # Funções utilitárias e formatadores (moeda, data)
├── App.tsx           # Componente raiz e orquestrador de estado
└── main.tsx          # Ponto de entrada da aplicação


⚡ Como Rodar o Projeto

Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

Instalação

Clone o repositório

git clone [https://github.com/sergiotim/fincontrol-dashboard.git](https://github.com/sergiotim/fincontrol-dashboard.git)


Acesse a pasta do projeto

cd fincontrol-dashboard


Instale as dependências

npm install


Execute o servidor de desenvolvimento

npm run dev


Acesse no navegador
O projeto estará rodando em http://localhost:5173.

🔜 Próximos Passos (Roadmap)

[ ] Implementar React Router DOM para navegação baseada em URL.

[ ] Adicionar persistência de dados (LocalStorage ou Backend/Firebase).

[ ] Implementar Tema Escuro (Dark Mode).

[ ] Adicionar testes unitários com Jest/Vitest.

🤝 Contribuindo

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será muito apreciada.

Faça um Fork do projeto

Crie uma Branch para sua Feature (git checkout -b feature/MinhaFeature)

Adicione suas mudanças (git add .)

Comite suas mudanças (git commit -m 'Adicionando uma feature incrível!')

Faça o Push da Branch (git push origin feature/MinhaFeature)

Abra um Pull Request

📝 Licença

Distribuído sob a licença MIT. Veja LICENSE para mais informações.

Feito com 💙 por Sérgio Timoteo
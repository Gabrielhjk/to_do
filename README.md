🚀 To-Do List API

Uma API RESTful para gerenciamento de listas de tarefas (To-Do List), desenvolvida com Node.js e orquestrada com Docker para um ambiente de desenvolvimento isolado e eficiente. Utiliza PostgreSQL para persistência de dados e Redis para gerenciamento de sessões.

🌟 Funcionalidades Principais 
- Autenticação: Login e Logout de usuários (via express-session com Redis).
- Gestão de Usuários: Cadastro, listagem e exclusão.
- Gestão de Tarefas (Tasks): Criação, leitura (listagem), atualização e exclusão de tarefas.
- Segurança: Utilização de TOKEN_SECRET e autenticação via sessão.
- Documentação: Swagger UI integrada para testar todos os endpoints.

🛠️ Tecnologias Utilizadas
O projeto é construído sobre o ecossistema Node.js e gerenciado com containers Docker.
- Backend: Node.js, Express
- Segurança: JWT
- ORM: Sequelize
- Validação dos Dados: Joi
- Banco de Dados: PostgreSQL
- Cache/Sessão: Redis
- Ambiente: Docker & Docker Compose
- Documentação das Apis: Swagger

📂 Estrutua do Projeto
```
to_do/
├── controllers/
│   ├── tasks.js            # Lógica de controle para operações de tarefas
│   └── users.js            # Lógica de controle para operações de usuário
├── db/
│   └── db.js               # Configuração e conexão do Sequelize (PostgreSQL)
├── middlewares/
│   ├── auth.js             # Middleware de autenticação (verifica sessão/token)
│   ├── errorHandler.js     # Middleware de tratamento de erros global
│   ├── validation_task.js  # Validação de dados para tarefas
│   ├── validation_token.js # Validação de token/expiração (se for JWT)
│   └── validation_user.js  # Validação de dados para usuários
├── models/
│   ├── Task.js             # Modelo Sequelize para a tabela de tarefas
│   └── User.js             # Modelo Sequelize para a tabela de usuários
├── node_modules/           # Dependências instaladas (ignorada pelo Git/Docker)
├── public/                 # Arquivos estáticos (se houver)
├── routes/
│   ├── routerTask.js       # Rotas específicas para tarefas
│   └── routerUser.js       # Rotas específicas para usuários (login, registro)
├── schemas/
│   ├── taskSchema.js       # Schemas de validação para tarefas (ex: Joi)
│   └── userSchema.js       # Schemas de validação para usuários (ex: Joi)
├── sessions/               # Armazenamento de sessões (se não for no Redis)
├── tests/
│   ├── tasks.test.js       # Testes unitários/integração para tarefas
│   └── users.test.js       # Testes unitários/integração para usuários
├── utils/
│   ├── AppError.js         # Classe de erro customizada
│   └── token.js            # Funções utilitárias para geração/verificação de tokens (JWT)
├── views/                  # Arquivos de visualização (se houver)
│   └── layouts/            # Layouts de visualização
├── .dockerignore           # Arquivos a serem ignorados ao construir a imagem Docker
├── .env                    # Variáveis de ambiente da aplicação
├── .env.test               # Variáveis de ambiente para testes
├── .gitignore              # Arquivos a serem ignorados pelo Git
├── docker-compose.yml      # Orquestração de serviços (Node.js, Postgres, Redis)
├── Dockerfile              # Definição da imagem Docker do backend
├── index.js                # Ponto de entrada da aplicação (Express config, middlewares, rotas)
├── package-lock.json       # Estado exato das dependências
├── package.json            # Metadados do projeto e scripts
├── README.md               # Documentação do projeto (o que acabamos de criar)
└── swagger.json            # Definição dos endpoints para o Swagger UI
```

📦 Pré-Requisitos
Você precisa ter instalado na sua máquina:
- Node.js
- Git: Para clonar o repositório.
- Docker & Docker Compose: Para subir o ambiente de desenvolvimento completo.

⚙️ Configuração do Ambiente
Siga os passos abaixo para clonar e iniciar a aplicação
- 1. Clonar o Repositório
     - (No terminal coloque) git clone https://github.com/Gabrielhjk/to_do.git
     - cd to_do

- 2. Configurar Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto e preencha com essas informações ou as suas 
```
# Ambiente
NODE_ENV = 'development'
PORT = 3000
# Chave de segurança para sessões/tokens
# Use o comando 'node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"' no terminal para gerar um token aleatório
TOKEN_SECRET = SEU_TOKEN_SECRETO_AQUI 

# Configurações do PostgreSQL
DB_HOST = db
POSTGRES_DB = to_do
POSTGRES_USER = postgres
POSTGRES_PASSWORD = 1234

# Configurações do Redis
REDIS_HOST = redis
REDIS_PORT = 6379 
```

- 3. Subir os Containers
Utilize o Docker Compose para construir as imagens e iniciar todos os serviços (Backend, PostgreSQL e Redis)
docker-compose up --build -d (O comando -d executa os containers em segundo plano)

- 4. Acessar a Aplicação
Aguarde alguns segundos até que o container do api_backend esteja totalmente pronto
- URL de Acesso as APIs via Swagger http://localhost:3000/api-docs
Lá você encontrará a lista de todos os endpoints e poderá testá-los diretamente

📝 Documentação da API (Swagger API)
Endpoints Principais
- POST /users/register: Cadastro de novo usuário
- POST /users/login: Login e criação de sessão
- POST /tasks/create: Criação de nova tarefa (requer autenticação)
- GET /tasks/all: Listagem de todas as tarefas (requer autenticação)


---
<p align="center">
A estruturação, formatação e o conteúdo deste arquivo <code>README.md</code> foram elaborados com o auxílio da inteligência artificial <strong>Gemini</strong> 
</p>

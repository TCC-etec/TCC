# Backend — TCC

API em Node.js, Express e TypeScript, com Prisma ORM 7 e PostgreSQL hospedado no Neon.

## Iniciar

1. Instale Node.js 22 ou superior.
2. Copie `.env.example` para `.env` e configure as URLs pooled (`DATABASE_URL`) e direta (`DIRECT_URL`) do Neon.
3. Instale dependências e gere o Prisma Client:

```bash
npm install
npm run db:generate
npm run dev
```

A verificação inicial da API fica em `GET /api/health`.

## Organização

- `src/routes`: definição das rotas
- `src/controllers`: camada HTTP
- `src/services`: regras de negócio
- `src/middlewares`: middlewares Express e tratamento de erros
- `src/validators`: validação de entrada
- `src/config`, `src/types`, `src/utils`: configurações e recursos compartilhados
- `src/db`: conexão com o banco
- `prisma`: schema e migrations

Use a URL pooled do Neon para a aplicação e a URL direta para o Prisma CLI/migrations.

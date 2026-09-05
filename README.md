# WorkSphere Employee Management System

WorkSphere is a full-stack Employee Management System built with Next.js, TypeScript, Prisma, and PostgreSQL, featuring employee management, attendance, leave management, payroll, performance tracking, role-based access control, dashboards, and reporting.

WorkSphere is a production-oriented Employee Management System planned for modern HR operations, team administration, attendance tracking, payroll, performance, and reporting.

## Project description

This project is a working SaaS-style employee management platform foundation built with Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, and modern HR workflows.

## Technology stack

- Next.js 14 (App Router)
- TypeScript
- React
- Tailwind CSS
- PostgreSQL
- Prisma ORM
- NextAuth/Auth.js architecture
- Zod validation
- React Hook Form
- Recharts
- Lucide React
- Docker / Docker Compose
- npm

## Available features

- Authentication and role-based access control
- Dashboard with HR KPIs and analytics
- Employee lifecycle management
- Department and designation management
- Attendance tracking and reports
- Leave workflows and balance tracking
- Payroll and payslip architecture
- Performance review management
- Notification and audit log layers
- Settings and configuration module

## Folder structure

```text
WorkSphere/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .vscode/
│   ├── settings.json
│   └── extensions.json
├── prisma/
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── services/
│   ├── types/
│   ├── hooks/
│   └── middleware.ts
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
├── PROJECT_REPORT.md
└── .eslintrc.json
```

## Environment variables

Create a local `.env` file based on `.env.example`:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/worksphere_dev?schema=public"
AUTH_SECRET="replace-with-strong-secret"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="replace-with-strong-secret"
NODE_ENV="development"
```

## Development setup

```bash
npm install
cp .env.example .env
npm run dev
```

## Database setup

1. Start PostgreSQL:
   ```bash
   docker-compose up -d postgres
   ```
2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
3. Apply migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Seed initial roles and an admin account when needed:
   ```bash
   SEED_ADMIN_PASSWORD="use-a-strong-unique-password" npm run prisma:seed
   ```

## Docker setup

Use the included Docker Compose file to run a PostgreSQL development instance.

```bash
docker-compose up -d
```

For the full application container, set `NEXTAUTH_SECRET` and `AUTH_SECRET` in your environment first, then run `docker compose up --build`. The app container pushes the Prisma schema to the configured database on startup. Use a migration-based deployment process instead of `db push` when promoting changes to an existing production database.

## Future development phases

- Phase 1: authentication, user onboarding, RBAC foundation
- Phase 2: employee and department management modules
- Phase 3: attendance and leave workflows
- Phase 4: payroll and report generation
- Phase 5: performance and notifications
- Phase 6: hardening, audit trails, and production readiness

## Notes

The current implementation includes the dashboard shell, authentication foundation, employee and department views, attendance and leave surfaces, payroll and performance views, reports, notifications, settings, validated API routes, and development seed data. Production deployment still requires a managed PostgreSQL database, a strong `NEXTAUTH_SECRET`, and a configured email/file-storage provider for workflows that depend on them.

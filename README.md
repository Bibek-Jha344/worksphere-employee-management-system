# WorkSphere - Employee Management System

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)

A modern, full-stack **Employee Management System** designed to simplify
employee administration, HR operations, attendance, leave management,
payroll, performance tracking, reporting, and organizational management.

Built with **Next.js, TypeScript, Tailwind CSS, Prisma ORM, and PostgreSQL**,
WorkSphere provides a centralized platform for managing the complete
employee lifecycle with secure authentication and role-based access control.

---

# 🌟 Key Architecture & Features

## 1. 🏗️ Full-Stack Application Architecture

- **Modern Next.js Architecture:** Built using the Next.js App Router with
  server-side functionality and a structured application architecture.

- **Type-Safe Development:** TypeScript is used throughout the application
  to provide safer APIs, database interactions, components, and business logic.

- **Database-Driven Application:** PostgreSQL provides reliable relational
  data storage while Prisma ORM handles database access and relationships.

- **Reusable Component Architecture:** Common UI elements, forms, tables,
  dialogs, cards, and utilities are designed for reuse throughout the system.

---

## 2. 🔐 Authentication & Role-Based Access Control

WorkSphere provides secure authentication and authorization for different
types of system users.

### Supported Roles

- `SUPER_ADMIN` — Complete system administration
- `HR` — Employee and HR operations
- `MANAGER` — Team management and approvals
- `EMPLOYEE` — Personal employee portal

### Security Features

- Secure authentication
- Password hashing
- Protected routes
- Role-based authorization
- Permission-based access
- Server-side authorization checks
- Session management
- Secure environment configuration

Users only receive access to the modules and information permitted by their
assigned role.

---

## 3. 👥 Employee Management

The employee module provides centralized management of employee information.

### Features

- Employee directory
- Employee profiles
- Employee ID management
- Personal information
- Contact information
- Emergency contacts
- Employment information
- Department assignment
- Designation assignment
- Manager assignment
- Joining date
- Employment status
- Employee activation/deactivation
- Employee search
- Filtering
- Sorting
- Pagination

The employee profile acts as the central record for an employee's
organizational information.

---

## 4. 🏢 Department & Designation Management

WorkSphere provides structured organizational management through departments
and designations.

### Departments

- Create departments
- Edit departments
- View departments
- Employee association
- Employee count
- Department-based filtering

### Designations

- Create designations
- Edit designations
- Department association
- Employee association
- Designation-based filtering

This provides a structured organizational hierarchy for the company.

---

## 5. ⏰ Attendance Management

The attendance module allows employees and HR users to manage attendance
records.

### Employee Features

- Check-in
- Check-out
- Today's attendance
- Attendance history

### HR / Management Features

- View employee attendance
- Date-based filtering
- Department filtering
- Attendance status
- Monthly attendance overview
- Late and absence tracking

Attendance records are stored in the PostgreSQL database and validated
server-side.

---

## 6. 🌴 Leave Management

WorkSphere provides a complete leave management workflow.

### Employee

- View leave balance
- Apply for leave
- View leave history
- Cancel pending requests

### Manager / HR

- View leave requests
- Approve requests
- Reject requests
- Add remarks
- Monitor employee leave

### Leave Validation

- Date validation
- Overlapping leave prevention
- Leave balance validation
- Automatic balance updates

Supported statuses:

`PENDING` · `APPROVED` · `REJECTED` · `CANCELLED`

---

## 7. 💰 Payroll Management

The payroll module provides structured salary and payroll management.

### Salary Components

- Basic salary
- Allowances
- Bonuses
- Deductions
- Other adjustments

### Payroll Features

- Salary structures
- Payroll records
- Payroll generation
- Payroll history
- Payroll status
- Employee payroll view
- Payslip information

Payroll calculations are processed server-side to prevent manipulation from
the client application.

---

## 8. 📈 Performance Management

The performance module provides tools for tracking employee development.

### Features

- Employee goals
- Performance reviews
- Ratings
- Manager feedback
- Review history
- Performance tracking

Managers can review employees assigned to their teams while HR and
administrators can access broader organizational performance information.

---

## 9. 📊 Dashboard & Analytics

The WorkSphere dashboard provides an overview of organizational activity.

### Dashboard Metrics

- Total employees
- Active employees
- Departments
- Attendance overview
- Leave statistics
- Payroll summary
- Recent employees
- Recent activities

### Analytics

- Employees by department
- Attendance statistics
- Leave trends
- Employee growth
- Payroll overview

Charts and analytics are powered by real application data.

---

## 10. 🔔 Notification System

The application includes an in-app notification system for important
employee and HR events.

Examples include:

- Leave approval notifications
- Leave rejection notifications
- New leave requests
- Payroll notifications
- Performance notifications
- System notifications

Users can:

- View notifications
- Mark notifications as read
- Mark all notifications as read
- View unread notification count

---

## 11. 📋 Audit Logging

Important system actions are recorded through an audit logging system.

Tracked activities include:

- User authentication
- Employee creation
- Employee updates
- Employee status changes
- Leave approvals
- Leave rejections
- Payroll actions
- Permission changes
- Administrative actions

Audit logs provide administrators with better visibility into system
activity and accountability.

---

## 12. 📑 Reports

WorkSphere provides reporting capabilities for important HR operations.

### Available Reports

- Employee reports
- Attendance reports
- Leave reports
- Payroll reports
- Performance reports

Reports support filtering and date-based analysis where applicable.

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **Next.js** | Full-stack React framework |
| **TypeScript** | Type-safe application development |
| **React** | User interface |
| **Tailwind CSS** | Responsive UI styling |
| **PostgreSQL** | Relational database |
| **Prisma ORM** | Database access and schema management |
| **Auth.js** | Authentication and sessions |
| **Zod** | Data validation |
| **React Hook Form** | Form management |
| **Recharts** | Analytics and charts |
| **Lucide React** | UI icons |
| **Docker** | Development database/containerization |

---

# 🗄️ Database Architecture

The application uses **PostgreSQL** with **Prisma ORM**.

Core entities include:

```text
Organization
     │
     ├── Users
     │     ├── Roles
     │     └── Permissions
     │
     └── Employees
           │
           ├── Department
           ├── Designation
           ├── Attendance
           ├── Leave
           ├── Payroll
           ├── Performance
           ├── Documents
           └── Notifications

    ---

    # Getting Started

    ## Prerequisites

    - Node.js 20 or later
    - npm
    - Docker Desktop, if using the included PostgreSQL container

    ## Local development

    1. Install dependencies:

      ```bash
      npm install
      ```

    2. Create a local environment file. On macOS or Linux:

      ```bash
      cp .env.example .env
      ```

      On Windows PowerShell:

      ```powershell
      Copy-Item .env.example .env
      ```

    3. Start PostgreSQL:

      ```bash
      docker compose up -d postgres
      ```

    4. Generate Prisma Client and synchronize the development database:

      ```bash
      npx prisma generate
      npx prisma db push
      ```

    5. Seed the development database with the demo organization, roles,
      permissions, leave types, and administrator account.

      macOS or Linux:

      ```bash
      SEED_ADMIN_PASSWORD="use-a-strong-unique-password" npm run prisma:seed
      ```

      Windows PowerShell:

      ```powershell
      $env:SEED_ADMIN_PASSWORD = "use-a-strong-unique-password"; npm run prisma:seed
      ```

    6. Start the application:

      ```bash
      npm run dev
      ```

    Open [http://localhost:3000](http://localhost:3000). After seeding, sign in
    with `admin@worksphere.local` and the password supplied through
    `SEED_ADMIN_PASSWORD`.

    ## Environment variables

    The `.env.example` file contains the local development defaults:

    ```dotenv
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/worksphere_dev?schema=public"
    AUTH_SECRET="generate-a-long-random-secret"
    NEXTAUTH_URL="http://localhost:3000"
    NEXTAUTH_SECRET="generate-a-different-long-random-secret"
    NODE_ENV="development"
    SEED_ADMIN_PASSWORD="set-only-when-running-the-seed"
    ```

    Use unique, randomly generated values for `AUTH_SECRET` and
    `NEXTAUTH_SECRET` outside local development. Do not commit `.env` or real
    credentials.

    ## Database workflow

    The repository currently has no committed Prisma migration files, so
    `npx prisma db push` is the simplest way to synchronize a local development
    database with `prisma/schema.prisma`.

    When a schema change should be versioned, create a migration instead:

    ```bash
    npx prisma migrate dev --name describe-your-change
    ```

    Useful Prisma commands:

    ```bash
    npm run prisma:generate
    npm run prisma:studio
    ```

    Do not use `db push` for a production database. Review and deploy versioned
    migrations in production.

    ## Docker Compose

    To run only PostgreSQL for local development:

    ```bash
    docker compose up -d postgres
    ```

    To build and run the application container, define `AUTH_SECRET` and
    `NEXTAUTH_SECRET` in the environment and run:

    ```bash
    docker compose up --build
    ```

    The application container waits for PostgreSQL, runs `prisma db push`, and
    starts the standalone Next.js server on port `3000`. This setup is intended
    for development or evaluation. Use managed secrets and a reviewed migration
    process for production deployment.

    ## Repository layout

    ```text
    prisma/
      schema.prisma       Database models and relationships
      seed.ts              Development seed data
      migrations/         Prisma migration directory
    public/               Images, icons, and logos
    src/
      app/                 Pages, layouts, and API routes
      components/          Feature and shared UI components
      hooks/               Reusable React hooks
      lib/                 Auth, Prisma, validation, permissions, and utilities
      services/            Server-side domain services
      types/               Shared TypeScript types
      middleware.ts        Route protection middleware
    docker-compose.yml     PostgreSQL and application services
    Dockerfile             Multi-stage production image
    next.config.mjs        Next.js configuration
    ```

    ## Quality checks

    ```bash
    npm run typecheck
    npm run lint
    npm run build
    ```

    ## Project status

    The repository includes the dashboard shell, authentication foundation,
    feature pages, validated API routes, Prisma models, services, and
    development seed data. Production readiness still requires deeper
    authorization coverage, comprehensive automated tests, migration-based
    deployment, and external providers for workflows such as email and file
    storage.

    Planned improvements include employee self-service, manager approval
    workflows, bulk import/export, richer analytics, notification delivery, and
    compliance-focused audit reporting.

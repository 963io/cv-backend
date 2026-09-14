# CV Backend

A digital business card API built with NestJS, GraphQL, Prisma, and PostgreSQL.
Exposes profile information — work experience, skills, and projects — via a GraphQL API with Apollo Sandbox.

## Tech Stack

- **Node.js** + **TypeScript**
- **NestJS** — application framework
- **GraphQL** (code-first) + **Apollo Sandbox**
- **Prisma** — ORM and migrations
- **PostgreSQL** — database
- **Docker** + **Docker Compose**

## Running with Docker (recommended)

Requires Docker Desktop.

```bash
docker compose up --build
```

That's it. On startup the app automatically:
1. Applies database migrations
2. Seeds the database with profile data
3. Starts the server

Open Apollo Sandbox at **http://localhost:3000/graphql**

## Running locally

Requires Node.js 22+ and a running PostgreSQL instance.

```bash
npm install
```

Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
# edit DATABASE_URL to point to your local postgres
```

Apply migrations and seed:
```bash
npx prisma migrate deploy
npx prisma db seed
```

Start the app:
```bash
npm run start:dev
```

## Example Query

```graphql
query {
  profile {
    name
    about
    links { type url }
    skills { title }
    experience {
      company
      position
      location
      employment_type
      highlights
      startDate
      endDate
    }
    projects {
      title
      url
    }
  }
}
```

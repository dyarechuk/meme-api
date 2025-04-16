# 🧠 Meme Directory Backend

This is the **backend API** for the Meme Directory project, built with **NestJS** and **Prisma**.  
It provides endpoints to retrieve and update meme data stored in a PostgreSQL database.

---

## 🚀 Tech Stack

- **NestJS** — Modular Node.js framework for building scalable server-side apps
- **Prisma** — Type-safe ORM for database access
- **PostgreSQL** — Relational database
- **class-validator + class-transformer** — DTO validation
- **CORS + ValidationPipe** — Global API guards and middleware

---

## 📦 Available Endpoints

### `GET /api/memes?sort=name&order=asc`
Returns sorted list of memes.

### `PATCH /api/memes/:id`
Updates a meme by `id`  
**Body:**
```json
{
  "name": "New Meme Name",
  "image": "https://example.com/image.jpg",
  "likes": 42
}
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/dyarechuk/meme-api.git
cd meme-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment

```bash
cp .env.example .env
# Update DATABASE_URL
```

### 4. Run seed

```bash
ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts
```

### 5. Run migrations

```bash
npx prisma migrate dev
```

### 6. Start the server

```bash
npm run start:dev
```

Server will run on:
http://localhost:3000/api

---

## 🧱 Folder Structure

src/
├── memes/              # Meme module (controller, service, dto)
├── common/enums/       # Shared enums like SortField, SortOrder
├── prisma.service.ts   # Prisma client wrapper
└── main.ts             # App bootstrap

---

## 🌐 CORS

Frontend (http://localhost:5173) is allowed by default.
Change in main.ts if deploying.

---

## 📤 Deployment

Backend is deployable independently (e.g., Railway)
Use .env for environment-specific configuration.

---

## 👨‍💻 Author

This project was created by [Dmytro Yarechuk](https://github.com/Dyarechuk).
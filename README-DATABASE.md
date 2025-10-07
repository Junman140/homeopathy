# Database Setup Guide

This guide will help you set up the database for the MOCHAM (Medical & Homeopathy School) application.

## Prerequisites

- Node.js and pnpm installed
- PostgreSQL database (local or cloud)

## Setup Steps

### 1. Configure Database Connection

Update the `.env` file with your database connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/homeopathy_db?schema=public"
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Generate Prisma Client

```bash
pnpm db:generate
```

### 4. Push Database Schema

```bash
pnpm db:push
```

### 5. Seed the Database

```bash
pnpm db:seed
```

### 6. Start the Development Server

```bash
pnpm dev
```

## Database Schema

The application includes the following models:

- **Programs**: Academic programs (degrees, diplomas, certificates)
- **Services**: Medical services offered by the clinic
- **Doctors**: Medical practitioners and their information
- **News**: Blog posts and news articles
- **Testimonials**: Patient testimonials
- **Applications**: Student applications
- **Appointments**: Patient appointments
- **ContactMessages**: Contact form submissions

## API Endpoints

- `GET /api/programs` - Fetch all programs
- `GET /api/services` - Fetch all services
- `GET /api/doctors` - Fetch all doctors
- `GET /api/news` - Fetch all news articles
- `GET /api/testimonials` - Fetch all testimonials
- `POST /api/appointments` - Create new appointment
- `POST /api/contact` - Submit contact form
- `POST /api/applications` - Submit application

## Database Management

### View Database in Browser

```bash
pnpm db:studio
```

### Reset Database

```bash
pnpm db:push --force-reset
pnpm db:seed
```

## Environment Variables

Make sure to set the following environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Secret key for NextAuth (if using authentication)
- `NEXTAUTH_URL`: Base URL for the application

## Troubleshooting

### Common Issues

1. **Database Connection Error**: Check your DATABASE_URL in .env file
2. **Prisma Client Not Generated**: Run `pnpm db:generate`
3. **Schema Not Applied**: Run `pnpm db:push`
4. **No Data**: Run `pnpm db:seed`

### Getting Help

If you encounter issues:

1. Check the console for error messages
2. Verify your database connection
3. Ensure all dependencies are installed
4. Check that the database schema is properly applied

# Aionion Insurance Marketing Replit Application

## Overview

This is a full-stack React TypeScript application for Aionion Insurance Marketing Pvt. Ltd., an IRDAI-registered Insurance Marketing Firm. The application serves as a marketing website showcasing various insurance products and services including Term Insurance, Health Insurance, General Insurance, and SME & Corporate Insurance solutions.

## System Architecture

The application follows a modern full-stack architecture with clear separation of concerns:

- **Frontend**: React 18 with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but may need setup)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Radix UI primitives with custom styling

## Key Components

### Frontend Architecture
- **Component Structure**: Organized around shadcn/ui design system with custom theming
- **Routing**: File-based routing with wouter handling navigation between pages (Home, Products, Renewals, Claims, Knowledge, Contact)
- **Theming**: Custom dark/light theme implementation with Aionion brand colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for type safety
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Middleware**: Request logging, JSON parsing, and error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) ready for database integration

### Data Management
- **Database Schema**: Drizzle ORM configured for PostgreSQL with user authentication schema
- **Query Client**: TanStack Query for efficient data fetching and caching
- **Form Handling**: React Hook Form with Zod validation schemas

### UI/UX Design
- **Design System**: shadcn/ui components with custom Aionion brand styling
- **Color Palette**: Custom brand colors (red, blue, plum, mint) with neutral tones
- **Typography**: Inter font family for modern, clean appearance
- **Animations**: Smooth transitions and hover effects throughout

## Data Flow

1. **Client Requests**: User interactions trigger React component state changes
2. **API Calls**: TanStack Query manages server communication through `/api` endpoints
3. **Server Processing**: Express routes handle business logic and data validation
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions (when database is connected)
5. **Response Handling**: Data flows back through query client to update UI components

## External Dependencies

### Production Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (wouter)
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Data Management**: TanStack Query, React Hook Form, Zod validation
- **Backend**: Express.js, Drizzle ORM, PostgreSQL drivers
- **Utilities**: date-fns for date handling, nanoid for ID generation

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint, Prettier (implied by project structure)

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Development**: `npm run dev` starts both Vite dev server and Express backend
2. **Build Process**: `npm run build` compiles both frontend and backend for production
3. **Production**: `npm start` runs the compiled Express server serving static assets
4. **Database**: Drizzle migrations ready for PostgreSQL deployment
5. **Environment**: Configured for Replit environment with appropriate plugins

### Build Configuration
- Frontend builds to `dist/public` directory
- Backend compiles to `dist/index.js` with ESM modules
- Static asset serving handled by Express in production
- Development mode includes hot reload and error overlay

### Database Setup
- Drizzle configuration points to PostgreSQL
- Migration files generated in `./migrations` directory
- Schema defined in `shared/schema.ts` for user management
- Environment variable `DATABASE_URL` required for connection

## Changelog

```
Changelog:
- June 29, 2025. Initial setup
- June 29, 2025. Fixed dark theme toggle functionality
- June 29, 2025. Fixed mobile menu color contrast issues  
- June 29, 2025. Added "Coming Soon" dialog overlays for Knowledge Centre sections
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
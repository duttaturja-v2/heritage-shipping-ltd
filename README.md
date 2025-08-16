# Heritage Shipping Limited

A comprehensive maritime logistics and shipping company website built with Next.js frontend and Django backend.

## Features

- Modern responsive design with maritime theme
- Ship tracking system
- Quote request functionality
- Fleet management
- Global network visualization
- News and updates
- Contact management

## Quick Start with Docker

1. Clone the repository
2. Run with Docker Compose:

\`\`\`bash
docker-compose up --build
\`\`\`

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api
   - Django Admin: http://localhost:8000/admin

## Development Setup

### Frontend (Next.js)
\`\`\`bash
npm install
npm run dev
\`\`\`

### Backend (Django)
\`\`\`bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
\`\`\`

## Environment Variables

Create `.env` files for both frontend and backend with necessary configuration.

## Docker Commands

- Build and start: `docker-compose up --build`
- Stop services: `docker-compose down`
- View logs: `docker-compose logs -f`
- Reset database: `docker-compose down -v`

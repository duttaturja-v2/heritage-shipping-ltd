# Heritage Shipping Limited - Local Setup Instructions

## 🚢 Welcome to Heritage Shipping Limited Website

This is a complete full-stack maritime logistics website built with Next.js frontend and Django backend, featuring authentication, shipment tracking, quote requests, and comprehensive business management.

## 📋 Prerequisites

Before setting up the project locally, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Python** (v3.11 or higher) - [Download here](https://python.org/)
- **PostgreSQL** (v13 or higher) - [Download here](https://postgresql.org/)
- **Redis** (v6 or higher) - [Download here](https://redis.io/)
- **Git** - [Download here](https://git-scm.com/)

## 🚀 Quick Start (Recommended)

### Option 1: Docker Setup (Easiest)

1. **Extract the ZIP file** to your desired location
2. **Navigate to the project directory**:
   \`\`\`bash
   cd heritage-shipping-website
   \`\`\`

3. **Copy environment variables**:
   \`\`\`bash
   cp .env.example .env
   \`\`\`

4. **Update the .env file** with your configuration (optional for development)

5. **Start with Docker Compose**:
   \`\`\`bash
   docker-compose up -d
   \`\`\`

6. **Setup the database** (first time only):
   \`\`\`bash
   docker-compose exec web python scripts/setup_production.py
   \`\`\`

7. **Access the website**:
   - Frontend: http://localhost:3000
   - Backend Admin: http://localhost:8000/admin

### Option 2: Manual Setup

#### Step 1: Frontend Setup

1. **Extract the ZIP file** and navigate to the project:
   \`\`\`bash
   cd heritage-shipping-website
   \`\`\`

2. **Install Node.js dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

The frontend will be available at http://localhost:3000

#### Step 2: Backend Setup

1. **Navigate to the backend directory**:
   \`\`\`bash
   cd backend
   \`\`\`

2. **Create a Python virtual environment**:
   \`\`\`bash
   python -m venv venv
   
   # On Windows:
   venv\Scripts\activate
   
   # On macOS/Linux:
   source venv/bin/activate
   \`\`\`

3. **Install Python dependencies**:
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

4. **Setup PostgreSQL database**:
   \`\`\`sql
   -- Connect to PostgreSQL and run:
   CREATE DATABASE heritage_shipping;
   CREATE USER heritage_user WITH PASSWORD 'heritage_pass';
   GRANT ALL PRIVILEGES ON DATABASE heritage_shipping TO heritage_user;
   \`\`\`

5. **Configure environment variables**:
   \`\`\`bash
   # Create .env file in backend directory
   cp .env.example .env
   
   # Update DATABASE_URL in .env:
   DATABASE_URL=postgresql://heritage_user:heritage_pass@localhost:5432/heritage_shipping
   \`\`\`

6. **Run database migrations**:
   \`\`\`bash
   python manage.py migrate
   \`\`\`

7. **Create sample data**:
   \`\`\`bash
   python ../scripts/setup_production.py
   \`\`\`

8. **Start the Django server**:
   \`\`\`bash
   python manage.py runserver 8000
   \`\`\`

#### Step 3: Redis Setup (Optional - for background tasks)

1. **Start Redis server**:
   \`\`\`bash
   # On Windows (if installed):
   redis-server
   
   # On macOS:
   brew services start redis
   
   # On Linux:
   sudo systemctl start redis
   \`\`\`

2. **Start Celery worker** (in a new terminal):
   \`\`\`bash
   cd backend
   celery -A heritage_shipping worker -l info
   \`\`\`

## 🔐 Demo Accounts

The setup script creates demo accounts for testing:

- **Admin Account**:
  - Email: admin@heritageshipping.com
  - Password: admin123
  - Access: Full admin panel access

- **Customer Account**:
  - Email: customer@heritageshipping.com
  - Password: demo123
  - Access: Customer portal with sample shipments

## 🌐 Production Deployment

### Environment Variables for Production

Update your `.env` file with production values:

\`\`\`env
DJANGO_DEBUG=False
DJANGO_ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DJANGO_SECRET_KEY=your-super-secure-secret-key
DATABASE_URL=your-production-database-url
REDIS_URL=your-production-redis-url
EMAIL_HOST=your-smtp-server
EMAIL_HOST_USER=your-email
EMAIL_HOST_PASSWORD=your-email-password
\`\`\`

### Deploy with Docker (Recommended)

1. **Use the production Docker Compose**:
   \`\`\`bash
   docker-compose -f docker-compose.prod.yml up -d
   \`\`\`

2. **Setup SSL certificates** (using Let's Encrypt):
   \`\`\`bash
   # Install certbot
   sudo apt install certbot python3-certbot-nginx
   
   # Get SSL certificate
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   \`\`\`

### Deploy to Cloud Platforms

#### Vercel (Frontend)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

#### Railway/Heroku (Backend)
1. Create new app on Railway/Heroku
2. Connect your repository
3. Set environment variables
4. Deploy with automatic builds

## 📱 Features Overview

### Frontend Features
- ✅ Responsive design for all devices
- ✅ Modern maritime-themed UI
- ✅ SEO optimized with meta tags
- ✅ Authentication system
- ✅ Shipment tracking
- ✅ Quote request system
- ✅ Contact forms with Google Maps
- ✅ Service showcase
- ✅ Company information pages
- ✅ Legal pages (Privacy, Terms, Cookies)

### Backend Features
- ✅ Django REST API
- ✅ JWT authentication
- ✅ PostgreSQL database
- ✅ Redis caching
- ✅ Celery background tasks
- ✅ Admin panel
- ✅ Email notifications
- ✅ Shipment management
- ✅ Quote processing
- ✅ User management

## 🛠️ Development Commands

### Frontend Commands
\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
\`\`\`

### Backend Commands
\`\`\`bash
python manage.py runserver     # Start development server
python manage.py migrate       # Run database migrations
python manage.py createsuperuser  # Create admin user
python manage.py collectstatic # Collect static files
python manage.py test         # Run tests
\`\`\`

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**:
   \`\`\`bash
   # Kill process on port 3000
   npx kill-port 3000
   
   # Kill process on port 8000
   npx kill-port 8000
   \`\`\`

2. **Database connection error**:
   - Ensure PostgreSQL is running
   - Check DATABASE_URL in .env file
   - Verify database credentials

3. **Redis connection error**:
   - Ensure Redis server is running
   - Check REDIS_URL in .env file

4. **Module not found errors**:
   \`\`\`bash
   # Reinstall dependencies
   npm install
   pip install -r requirements.txt
   \`\`\`

## 📞 Support

For technical support or questions about Heritage Shipping Limited:

- **Email**: info@heritageshipping.com
- **Phone**: +880-31-123-4567
- **Address**: Port Road, Chattogram, Bangladesh

## 📄 License

This project is proprietary software of Heritage Shipping Limited. All rights reserved.

---

**Heritage Shipping Limited** - Connecting Bangladesh to the World 🌊

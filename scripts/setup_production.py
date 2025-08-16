#!/usr/bin/env python3
"""
Production setup script for Heritage Shipping Limited website
This script sets up the Django backend with sample data for production deployment
"""

import os
import sys
import django
from django.core.management import execute_from_command_line

def setup_django():
    """Setup Django environment"""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'heritage_shipping.settings')
    django.setup()

def create_sample_data():
    """Create sample data for demonstration"""
    from shipping.models import Service, Vessel, News, Job, Office, ContactInquiry, Shipment, QuoteRequest
    from django.contrib.auth.models import User
    
    # Create demo users
    admin_user, created = User.objects.get_or_create(
        username='admin',
        defaults={
            'email': 'admin@heritageshipping.com',
            'first_name': 'Admin',
            'last_name': 'User',
            'is_staff': True,
            'is_superuser': True
        }
    )
    if created:
        admin_user.set_password('admin123')
        admin_user.save()
    
    customer_user, created = User.objects.get_or_create(
        username='customer',
        defaults={
            'email': 'customer@heritageshipping.com',
            'first_name': 'Demo',
            'last_name': 'Customer'
        }
    )
    if created:
        customer_user.set_password('demo123')
        customer_user.save()
    
    # Create services
    services_data = [
        {
            'name': 'Sea Freight',
            'description': 'Comprehensive ocean freight services for global shipping needs',
            'features': ['Door-to-door delivery', 'FCL & LCL options', 'Real-time tracking'],
            'is_active': True
        },
        {
            'name': 'Crew Immigration',
            'description': 'Complete seafarer documentation and visa processing services',
            'features': ['Visa processing', 'Work permits', 'Medical certificates', 'STCW documentation'],
            'is_active': True
        },
        {
            'name': 'Customs Clearance',
            'description': 'Expert trade compliance and customs clearance services',
            'features': ['Import/Export clearance', 'Documentation', 'Compliance consulting'],
            'is_active': True
        },
        {
            'name': 'Warehousing & Storage',
            'description': 'Secure storage and inventory management solutions',
            'features': ['Climate-controlled storage', 'Inventory management', 'Pick & pack services'],
            'is_active': True
        }
    ]
    
    for service_data in services_data:
        Service.objects.get_or_create(
            name=service_data['name'],
            defaults=service_data
        )
    
    # Create sample shipments
    sample_shipments = [
        {
            'tracking_number': 'HSL2024001',
            'user': customer_user,
            'origin': 'Chattogram Port, Bangladesh',
            'destination': 'Hamburg Port, Germany',
            'status': 'in_transit',
            'estimated_delivery': '2024-09-15'
        },
        {
            'tracking_number': 'HSL2024002',
            'user': customer_user,
            'origin': 'Chattogram Port, Bangladesh',
            'destination': 'Singapore Port',
            'status': 'delivered',
            'estimated_delivery': '2024-08-20'
        }
    ]
    
    for shipment_data in sample_shipments:
        Shipment.objects.get_or_create(
            tracking_number=shipment_data['tracking_number'],
            defaults=shipment_data
        )
    
    print("✅ Sample data created successfully!")

def main():
    """Main setup function"""
    print("🚢 Setting up Heritage Shipping Limited Production Environment...")
    
    # Setup Django
    setup_django()
    
    # Run migrations
    print("📦 Running database migrations...")
    execute_from_command_line(['manage.py', 'migrate'])
    
    # Create sample data
    print("📊 Creating sample data...")
    create_sample_data()
    
    # Collect static files
    print("📁 Collecting static files...")
    execute_from_command_line(['manage.py', 'collectstatic', '--noinput'])
    
    print("🎉 Production setup completed successfully!")
    print("\n📋 Demo Accounts:")
    print("   Admin: admin@heritageshipping.com / admin123")
    print("   Customer: customer@heritageshipping.com / demo123")

if __name__ == '__main__':
    main()

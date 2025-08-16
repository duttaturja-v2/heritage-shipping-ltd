import os
import sys
import django

# Add the backend directory to the Python path
sys.path.append('backend')

# Set up Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'heritage_shipping.settings')
django.setup()

from shipping.models import Service, Vessel, NewsArticle, JobPosting, Office
from django.utils import timezone
from django.utils.text import slugify

def create_sample_data():
    print("Creating sample data for Heritage Shipping...")
    
    # Create Services
    services_data = [
        {
            'name': 'Sea Freight',
            'description': 'Reliable ocean shipping with global coverage and competitive rates.',
            'features': ['Global Coverage', 'Competitive Rates', 'Real-time Tracking', 'Flexible Scheduling'],
            'icon': 'ship'
        },
        {
            'name': 'Air Freight',
            'description': 'Fast air cargo services for time-sensitive shipments worldwide.',
            'features': ['Express Delivery', 'Global Network', 'Temperature Control', 'Secure Handling'],
            'icon': 'plane'
        },
        {
            'name': 'Land Transport',
            'description': 'Comprehensive ground transportation and last-mile delivery solutions.',
            'features': ['Door-to-Door', 'Real-time GPS', 'Flexible Routes', 'Secure Transport'],
            'icon': 'truck'
        },
        {
            'name': 'Warehousing',
            'description': 'Secure storage facilities with advanced inventory management systems.',
            'features': ['Climate Control', 'Security Systems', 'Inventory Management', 'Distribution'],
            'icon': 'warehouse'
        },
        {
            'name': 'Customs Clearance',
            'description': 'Expert customs brokerage and documentation services.',
            'features': ['Expert Knowledge', 'Fast Processing', 'Compliance', 'Documentation'],
            'icon': 'document'
        },
        {
            'name': 'Supply Chain Solutions',
            'description': 'End-to-end supply chain optimization and management services.',
            'features': ['Supply Chain Design', 'Optimization', 'Risk Management', 'Analytics'],
            'icon': 'network'
        }
    ]
    
    for service_data in services_data:
        service, created = Service.objects.get_or_create(
            name=service_data['name'],
            defaults=service_data
        )
        if created:
            print(f"Created service: {service.name}")
    
    # Create Vessels
    vessels_data = [
        {
            'name': 'Heritage Pioneer',
            'vessel_type': 'container',
            'capacity': '18,000 TEU',
            'year_built': 2020,
            'flag': 'Singapore',
            'specifications': {
                'length': '400m',
                'beam': '59m',
                'draft': '16m',
                'speed': '22 knots'
            }
        },
        {
            'name': 'Heritage Voyager',
            'vessel_type': 'bulk',
            'capacity': '180,000 DWT',
            'year_built': 2019,
            'flag': 'Liberia',
            'specifications': {
                'length': '300m',
                'beam': '50m',
                'draft': '18m',
                'speed': '14 knots'
            }
        },
        {
            'name': 'Heritage Express',
            'vessel_type': 'roro',
            'capacity': '2,500 Lane Meters',
            'year_built': 2021,
            'flag': 'Marshall Islands',
            'specifications': {
                'length': '230m',
                'beam': '32m',
                'draft': '7m',
                'speed': '20 knots'
            }
        }
    ]
    
    for vessel_data in vessels_data:
        vessel, created = Vessel.objects.get_or_create(
            name=vessel_data['name'],
            defaults=vessel_data
        )
        if created:
            print(f"Created vessel: {vessel.name}")
    
    # Create News Articles
    news_data = [
        {
            'title': 'Heritage Shipping Expands Fleet with New Container Vessels',
            'excerpt': 'We are proud to announce the addition of three new state-of-the-art container vessels to our growing fleet.',
            'content': 'Heritage Shipping Limited continues to strengthen its position in the global maritime industry with the addition of three new ultra-large container vessels. These ships represent the latest in maritime technology and environmental efficiency.',
            'category': 'Fleet Expansion',
            'is_featured': True
        },
        {
            'title': 'Sustainability Initiative: Green Shipping Solutions',
            'excerpt': 'Our commitment to environmental responsibility drives our new green shipping initiatives.',
            'content': 'Heritage Shipping is leading the industry in sustainable maritime practices with our comprehensive green shipping program.',
            'category': 'Sustainability'
        },
        {
            'title': 'New Partnership with Global Logistics Leader',
            'excerpt': 'Strategic partnership enhances our global reach and service capabilities.',
            'content': 'We are excited to announce our new strategic partnership that will expand our service network across three continents.',
            'category': 'Partnerships'
        }
    ]
    
    for news_item in news_data:
        news_item['slug'] = slugify(news_item['title'])
        article, created = NewsArticle.objects.get_or_create(
            slug=news_item['slug'],
            defaults=news_item
        )
        if created:
            print(f"Created news article: {article.title}")
    
    # Create Job Postings
    jobs_data = [
        {
            'title': 'Senior Maritime Operations Manager',
            'department': 'Operations',
            'location': 'Singapore',
            'employment_type': 'Full-time',
            'description': 'Lead our maritime operations team and oversee vessel scheduling and port operations.',
            'requirements': ['10+ years maritime experience', 'Maritime degree', 'Leadership skills'],
            'responsibilities': ['Manage vessel operations', 'Coordinate with ports', 'Team leadership'],
            'salary_range': '$80,000 - $120,000'
        },
        {
            'title': 'Logistics Coordinator',
            'department': 'Logistics',
            'location': 'Dubai',
            'employment_type': 'Full-time',
            'description': 'Coordinate shipments and manage customer relationships.',
            'requirements': ['3+ years logistics experience', 'Strong communication', 'Problem-solving skills'],
            'responsibilities': ['Coordinate shipments', 'Customer service', 'Documentation'],
            'salary_range': '$45,000 - $65,000'
        }
    ]
    
    for job_data in jobs_data:
        job, created = JobPosting.objects.get_or_create(
            title=job_data['title'],
            defaults=job_data
        )
        if created:
            print(f"Created job posting: {job.title}")
    
    # Create Offices
    offices_data = [
        {
            'name': 'Heritage Shipping Headquarters',
            'address': '123 Marina Bay Drive, Level 45',
            'city': 'Singapore',
            'country': 'Singapore',
            'phone': '+65 6123 4567',
            'email': 'singapore@heritageshipping.com',
            'is_headquarters': True,
            'latitude': 1.2966,
            'longitude': 103.8764
        },
        {
            'name': 'Heritage Shipping Dubai',
            'address': 'Dubai International Financial Centre, Gate Village 10',
            'city': 'Dubai',
            'country': 'United Arab Emirates',
            'phone': '+971 4 123 4567',
            'email': 'dubai@heritageshipping.com',
            'latitude': 25.2048,
            'longitude': 55.2708
        },
        {
            'name': 'Heritage Shipping London',
            'address': '1 Canary Wharf, 25th Floor',
            'city': 'London',
            'country': 'United Kingdom',
            'phone': '+44 20 1234 5678',
            'email': 'london@heritageshipping.com',
            'latitude': 51.5074,
            'longitude': -0.1278
        }
    ]
    
    for office_data in offices_data:
        office, created = Office.objects.get_or_create(
            name=office_data['name'],
            defaults=office_data
        )
        if created:
            print(f"Created office: {office.name}")
    
    print("Sample data creation completed!")

if __name__ == '__main__':
    create_sample_data()

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    address = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.username} - {self.email}"


class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    features = models.JSONField(default=list)
    icon = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Vessel(models.Model):
    VESSEL_TYPES = [
        ('container', 'Container Ship'),
        ('bulk', 'Bulk Carrier'),
        ('roro', 'RoRo Vessel'),
        ('general', 'General Cargo'),
        ('tanker', 'Tanker'),
    ]
    
    name = models.CharField(max_length=100)
    vessel_type = models.CharField(max_length=20, choices=VESSEL_TYPES)
    capacity = models.CharField(max_length=50)
    year_built = models.IntegerField()
    flag = models.CharField(max_length=50)
    specifications = models.JSONField(default=dict)
    image = models.ImageField(upload_to='vessels/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.get_vessel_type_display()})"


class NewsArticle(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    excerpt = models.TextField(max_length=300)
    content = models.TextField()
    featured_image = models.ImageField(upload_to='news/', blank=True, null=True)
    category = models.CharField(max_length=50)
    published_at = models.DateTimeField(default=timezone.now)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title


class JobPosting(models.Model):
    title = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    employment_type = models.CharField(max_length=20)
    description = models.TextField()
    requirements = models.JSONField(default=list)
    responsibilities = models.JSONField(default=list)
    salary_range = models.CharField(max_length=50, blank=True)
    is_active = models.BooleanField(default=True)
    posted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-posted_at']

    def __str__(self):
        return f"{self.title} - {self.department}"


class ContactInquiry(models.Model):
    INQUIRY_TYPES = [
        ('general', 'General Inquiry'),
        ('quote', 'Request Quote'),
        ('support', 'Customer Support'),
        ('partnership', 'Partnership'),
        ('career', 'Career Inquiry'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    company = models.CharField(max_length=100, blank=True)
    inquiry_type = models.CharField(max_length=20, choices=INQUIRY_TYPES)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_resolved = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.subject}"


class Office(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    is_headquarters = models.BooleanField(default=False)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.city}, {self.country}"


class Shipment(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_transit', 'In Transit'),
        ('customs', 'In Customs'),
        ('out_for_delivery', 'Out for Delivery'),
        ('delivered', 'Delivered'),
        ('delayed', 'Delayed'),
        ('exception', 'Exception'),
    ]
    
    tracking_number = models.CharField(max_length=20, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='shipments', null=True, blank=True)
    sender_name = models.CharField(max_length=100)
    sender_address = models.TextField()
    recipient_name = models.CharField(max_length=100)
    recipient_address = models.TextField()
    origin_port = models.CharField(max_length=100)
    destination_port = models.CharField(max_length=100)
    vessel = models.ForeignKey(Vessel, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    estimated_delivery = models.DateTimeField()
    actual_delivery = models.DateTimeField(null=True, blank=True)
    weight = models.DecimalField(max_digits=10, decimal_places=2)
    dimensions = models.CharField(max_length=100)
    cargo_type = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Shipment {self.tracking_number} - {self.status}"


class ShipmentUpdate(models.Model):
    shipment = models.ForeignKey(Shipment, on_delete=models.CASCADE, related_name='updates')
    location = models.CharField(max_length=100)
    status = models.CharField(max_length=20)
    description = models.TextField()
    timestamp = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"{self.shipment.tracking_number} - {self.status} at {self.location}"


class QuoteRequest(models.Model):
    CARGO_TYPES = [
        ('container', 'Container'),
        ('bulk', 'Bulk Cargo'),
        ('breakbulk', 'Break Bulk'),
        ('roro', 'Roll-on/Roll-off'),
        ('liquid', 'Liquid Cargo'),
        ('hazardous', 'Hazardous Materials'),
    ]
    
    SERVICE_TYPES = [
        ('ocean_freight', 'Ocean Freight'),
        ('air_freight', 'Air Freight'),
        ('land_transport', 'Land Transport'),
        ('warehousing', 'Warehousing'),
        ('customs', 'Customs Clearance'),
        ('multimodal', 'Multimodal Transport'),
    ]
    
    quote_number = models.CharField(max_length=20, unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quotes', null=True, blank=True)
    company_name = models.CharField(max_length=100)
    contact_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    service_type = models.CharField(max_length=20, choices=SERVICE_TYPES)
    cargo_type = models.CharField(max_length=20, choices=CARGO_TYPES)
    origin_port = models.CharField(max_length=100)
    destination_port = models.CharField(max_length=100)
    cargo_description = models.TextField()
    weight = models.DecimalField(max_digits=10, decimal_places=2)
    dimensions = models.CharField(max_length=100)
    estimated_value = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    preferred_shipping_date = models.DateField()
    special_requirements = models.TextField(blank=True)
    is_processed = models.BooleanField(default=False)
    quoted_price = models.DecimalField(max_digits=12, decimal_places=2, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.quote_number:
            # Generate quote number
            import random
            import string
            self.quote_number = 'HQ' + ''.join(random.choices(string.digits, k=8))
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Quote {self.quote_number} - {self.company_name}"

from django.contrib import admin
from .models import Service, Vessel, NewsArticle, JobPosting, ContactInquiry, Office


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at']
    search_fields = ['name', 'description']


@admin.register(Vessel)
class VesselAdmin(admin.ModelAdmin):
    list_display = ['name', 'vessel_type', 'capacity', 'year_built', 'flag']
    list_filter = ['vessel_type', 'year_built', 'flag']
    search_fields = ['name']


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'published_at', 'is_featured']
    list_filter = ['category', 'is_featured', 'published_at']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(JobPosting)
class JobPostingAdmin(admin.ModelAdmin):
    list_display = ['title', 'department', 'location', 'employment_type', 'is_active', 'posted_at']
    list_filter = ['department', 'location', 'employment_type', 'is_active']
    search_fields = ['title', 'description']


@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'inquiry_type', 'subject', 'created_at', 'is_resolved']
    list_filter = ['inquiry_type', 'is_resolved', 'created_at']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']


@admin.register(Office)
class OfficeAdmin(admin.ModelAdmin):
    list_display = ['name', 'city', 'country', 'is_headquarters']
    list_filter = ['country', 'is_headquarters']
    search_fields = ['name', 'city', 'country']

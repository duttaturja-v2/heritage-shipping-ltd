from django.urls import path
from . import views

urlpatterns = [
    path('auth/register/', views.RegisterView.as_view(), name='register'),
    path('auth/login/', views.LoginView.as_view(), name='login'),
    path('auth/profile/', views.ProfileView.as_view(), name='profile'),
    
    path('user/shipments/', views.user_shipments, name='user-shipments'),
    path('user/quotes/', views.user_quotes, name='user-quotes'),

    path('services/', views.ServiceListView.as_view(), name='service-list'),
    path('vessels/', views.VesselListView.as_view(), name='vessel-list'),
    path('news/', views.NewsListView.as_view(), name='news-list'),
    path('news/<slug:slug>/', views.NewsDetailView.as_view(), name='news-detail'),
    path('jobs/', views.JobListView.as_view(), name='job-list'),
    path('offices/', views.OfficeListView.as_view(), name='office-list'),
    path('contact/', views.ContactCreateView.as_view(), name='contact-create'),
    path('stats/', views.company_stats, name='company-stats'),
    path('track/<str:tracking_number>/', views.track_shipment, name='track-shipment'),
    path('quote/', views.QuoteRequestCreateView.as_view(), name='quote-create'),
    path('quote/<str:quote_number>/', views.get_quote_status, name='quote-status'),
]

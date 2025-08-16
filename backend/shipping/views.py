from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth import authenticate
from .models import Service, Vessel, NewsArticle, JobPosting, ContactInquiry, Office, Shipment, QuoteRequest, User
from .serializers import (
    ServiceSerializer, VesselSerializer, NewsArticleSerializer,
    JobPostingSerializer, ContactInquirySerializer, OfficeSerializer,
    ShipmentSerializer, QuoteRequestSerializer, UserSerializer,
    UserRegistrationSerializer, LoginSerializer
)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'user': UserSerializer(user).data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'user': UserSerializer(user).data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })

class ProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class VesselListView(generics.ListAPIView):
    queryset = Vessel.objects.all()
    serializer_class = VesselSerializer


class NewsListView(generics.ListAPIView):
    queryset = NewsArticle.objects.filter(published_at__isnull=False)
    serializer_class = NewsArticleSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.query_params.get('category', None)
        if category:
            queryset = queryset.filter(category=category)
        return queryset


class NewsDetailView(generics.RetrieveAPIView):
    queryset = NewsArticle.objects.all()
    serializer_class = NewsArticleSerializer
    lookup_field = 'slug'


class JobListView(generics.ListAPIView):
    queryset = JobPosting.objects.filter(is_active=True)
    serializer_class = JobPostingSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        department = self.request.query_params.get('department', None)
        location = self.request.query_params.get('location', None)
        
        if department:
            queryset = queryset.filter(department=department)
        if location:
            queryset = queryset.filter(location__icontains=location)
        
        return queryset


class OfficeListView(generics.ListAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer


class ContactCreateView(generics.CreateAPIView):
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # Send email notification (optional)
        try:
            send_mail(
                subject=f"New Contact Inquiry: {serializer.validated_data['subject']}",
                message=f"From: {serializer.validated_data['name']} ({serializer.validated_data['email']})\n\n{serializer.validated_data['message']}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['contact@heritageshipping.com'],
                fail_silently=True,
            )
        except:
            pass  # Email sending is optional
        
        headers = self.get_success_headers(serializer.data)
        return Response(
            {"message": "Thank you for your inquiry. We'll get back to you soon!"},
            status=status.HTTP_201_CREATED,
            headers=headers
        )


@api_view(['GET'])
def company_stats(request):
    """Return company statistics for the homepage"""
    stats = {
        'years_of_excellence': 25,
        'global_destinations': 150,
        'shipments_delivered': 50000,
        'on_time_delivery': 99.8
    }
    return Response(stats)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])  # Require authentication for tracking
def track_shipment(request, tracking_number):
    """Track a shipment by tracking number"""
    try:
        shipment = Shipment.objects.get(tracking_number=tracking_number, user=request.user)
        serializer = ShipmentSerializer(shipment)
        return Response(serializer.data)
    except Shipment.DoesNotExist:
        return Response(
            {"error": "Shipment not found. Please check your tracking number."},
            status=status.HTTP_404_NOT_FOUND
        )


class QuoteRequestCreateView(generics.CreateAPIView):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer
    permission_classes = [permissions.IsAuthenticated]  # Require authentication

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        # Send email notification
        try:
            send_mail(
                subject=f"New Quote Request: {serializer.instance.quote_number}",
                message=f"New quote request from {serializer.validated_data['company_name']}\nQuote Number: {serializer.instance.quote_number}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['quotes@heritageshipping.com'],
                fail_silently=True,
            )
        except:
            pass
        
        headers = self.get_success_headers(serializer.data)
        return Response({
            "message": "Quote request submitted successfully!",
            "quote_number": serializer.instance.quote_number
        }, status=status.HTTP_201_CREATED, headers=headers)


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])  # Require authentication
def get_quote_status(request, quote_number):
    """Get quote request status"""
    try:
        quote = QuoteRequest.objects.get(quote_number=quote_number, user=request.user)
        serializer = QuoteRequestSerializer(quote)
        return Response(serializer.data)
    except QuoteRequest.DoesNotExist:
        return Response(
            {"error": "Quote request not found."},
            status=status.HTTP_404_NOT_FOUND
        )

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_shipments(request):
    """Get current user's shipments"""
    shipments = Shipment.objects.filter(user=request.user)
    serializer = ShipmentSerializer(shipments, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_quotes(request):
    """Get current user's quote requests"""
    quotes = QuoteRequest.objects.filter(user=request.user)
    serializer = QuoteRequestSerializer(quotes, many=True)
    return Response(serializer.data)

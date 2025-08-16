from celery import shared_task
from django.core.mail import send_mail
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

@shared_task
def send_quote_notification(quote_id):
    """Send email notification when a new quote is requested"""
    try:
        from .models import QuoteRequest
        quote = QuoteRequest.objects.get(id=quote_id)
        
        subject = f'New Quote Request - {quote.quote_number}'
        message = f'''
        New quote request received:
        
        Quote Number: {quote.quote_number}
        Customer: {quote.user.get_full_name()}
        Email: {quote.user.email}
        Service: {quote.service_type}
        Origin: {quote.origin}
        Destination: {quote.destination}
        
        Please review and respond to this quote request.
        '''
        
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            ['admin@heritageshipping.com'],
            fail_silently=False,
        )
        
        logger.info(f'Quote notification sent for {quote.quote_number}')
        
    except Exception as e:
        logger.error(f'Failed to send quote notification: {str(e)}')

@shared_task
def update_shipment_status(shipment_id, status, location):
    """Update shipment status and location"""
    try:
        from .models import Shipment, ShipmentUpdate
        
        shipment = Shipment.objects.get(id=shipment_id)
        shipment.status = status
        shipment.current_location = location
        shipment.save()
        
        # Create shipment update record
        ShipmentUpdate.objects.create(
            shipment=shipment,
            status=status,
            location=location,
            notes=f'Status updated to {status}'
        )
        
        logger.info(f'Shipment {shipment.tracking_number} updated to {status}')
        
    except Exception as e:
        logger.error(f'Failed to update shipment status: {str(e)}')

from coupons.models import Coupon
from rest_framework import viewsets, permissions
from .serializers import CouponSerializer

# Coupon Viewset


class CouponViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
 
    serializer_class = CouponSerializer
    
    def get_queryset(self):
        return self.request.user.coupons.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
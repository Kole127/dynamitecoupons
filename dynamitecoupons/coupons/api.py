from coupons.models import Coupon
from rest_framework import viewsets, permissions
from .serializers import CouponSerializer, CouponUserSerializer

# Coupon User Viewset

class CouponUserViewSet(viewsets.ModelViewSet):
    queryset = Coupon.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = CouponUserSerializer

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
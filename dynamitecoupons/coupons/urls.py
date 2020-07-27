from rest_framework import routers
from .api import CouponViewSet

router = routers.DefaultRouter()
router.register('api/coupons', CouponViewSet, 'coupons')

urlpatterns = router.urls
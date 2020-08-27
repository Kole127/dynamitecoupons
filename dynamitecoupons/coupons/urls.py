from rest_framework import routers
from .api import CouponViewSet, CouponUserViewSet

router = routers.DefaultRouter()
router.register('api/coupons', CouponViewSet, 'coupons')
router.register('api/coupons_user', CouponUserViewSet, 'coupons')

urlpatterns = router.urls
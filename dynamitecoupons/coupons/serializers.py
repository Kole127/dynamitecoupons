from rest_framework import serializers
from coupons.models import Coupon 

# Coupon Serializer
class CouponSerializer(serializers.ModelSerializer):
  class Meta:
    model = Coupon 
    fields = '__all__'

# Coupon Serializer
class CouponUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Coupon 
    fields = '__all__'
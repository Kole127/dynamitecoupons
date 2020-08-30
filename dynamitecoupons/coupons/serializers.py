from rest_framework import serializers
from coupons.models import Coupon 
from datetime import date, datetime

# Coupon Serializer
class CouponSerializer(serializers.ModelSerializer):
  username = serializers.ReadOnlyField(source='owner.username')
  company_name = serializers.ReadOnlyField(source='company.name')

  class Meta:
    model = Coupon 
    fields = '__all__'

# Coupon Serializer
class CouponUserSerializer(serializers.ModelSerializer):
  username = serializers.ReadOnlyField(source='owner.username')
  company_name = serializers.ReadOnlyField(source='company.name')

  class Meta:
    model = Coupon 
    fields = '__all__'
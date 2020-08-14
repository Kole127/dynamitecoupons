from django.contrib import admin
from .models import Coupon, Coupon_Detail, Membership, Client
# Register your models here.

admin.site.register(Coupon)
admin.site.register(Coupon_Detail)
admin.site.register(Membership)
admin.site.register(Client)
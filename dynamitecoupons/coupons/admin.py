from django.contrib import admin
from .models import Coupon, Membership, Company, Currency
# Register your models here.

admin.site.register(Coupon)
admin.site.register(Membership)
admin.site.register(Company)
admin.site.register(Currency)
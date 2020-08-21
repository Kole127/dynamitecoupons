# DATABASE MODELS

from django.db import models
from django.contrib.auth.models import User


class Coupon(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    is_valid = models.BooleanField(default=True)
    expiry_date = models.DateField(blank=True,  null=True)
    owner = models.ForeignKey(
        User, related_name="coupons", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Coupon_Detail(models.Model):
    c_type = models.CharField(max_length=100)
    

class Membership(models.Model):
    name = models.CharField(max_length=100)
    m_type = models.EmailField(max_length=100)
    price = models.CharField(max_length=500)

class Client(models.Model):
    membership = models.ForeignKey(Membership, on_delete=models.CASCADE)
    f_name = models.CharField(max_length=100)
    l_name = models.EmailField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
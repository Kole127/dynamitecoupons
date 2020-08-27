# DATABASE MODELS

from django.db import models
from django.contrib.auth.models import User
import qrcode
from io import BytesIO
from django.core.files import File
from PIL import Image, ImageDraw


class Coupon(models.Model):
    name = models.CharField(max_length=100)
    discount = models.CharField(max_length=100, null=True)
    # email = models.EmailField(max_length=100, unique=True)
    is_valid = models.BooleanField(default=True)
    expiry_date = models.DateField(blank=True,  null=True)
    qr_code = models.ImageField(upload_to='qr_codes', blank=True)
    owner = models.ForeignKey(
        User, related_name="coupons", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        qrcode_img = qrcode.make(self.name)
        canvas = Image.new('RGB', (290, 290), 'white')
        draw = ImageDraw.Draw(canvas)
        canvas.paste(qrcode_img)
        fname = f'qr_code-{self.name}.png'
        buffer = BytesIO()
        canvas.save(buffer, 'PNG')
        self.qr_code.save(fname, File(buffer), save=False)
        canvas.close()
        super().save(*args, **kwargs)

class Membership(models.Model):
    name = models.CharField(max_length=100)
    m_type = models.EmailField(max_length=100)
    price = models.CharField(max_length=500)

class Client(models.Model):
    # LOKACIJA
    # EMAIL
    membership = models.ForeignKey(Membership, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.EmailField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
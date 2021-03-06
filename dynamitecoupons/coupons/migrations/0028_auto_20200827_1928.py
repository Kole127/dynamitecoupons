# Generated by Django 3.0.8 on 2020-08-27 17:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('coupons', '0027_auto_20200827_1854'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coupon',
            name='company',
        ),
        migrations.RemoveField(
            model_name='membership',
            name='currency_code',
        ),
        migrations.AddField(
            model_name='company',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='companies', to=settings.AUTH_USER_MODEL),
        ),
    ]

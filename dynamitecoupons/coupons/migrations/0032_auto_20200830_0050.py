# Generated by Django 3.0.8 on 2020-08-29 22:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0031_coupon_code'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coupon',
            name='is_valid',
        ),
        migrations.AddField(
            model_name='coupon',
            name='is_active',
            field=models.CharField(max_length=100, null=True),
        ),
    ]

# Generated by Django 3.0.8 on 2020-08-14 13:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0012_coupon_details'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Coupon_Details',
            new_name='Coupon_Detail',
        ),
    ]
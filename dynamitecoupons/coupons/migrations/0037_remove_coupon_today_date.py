# Generated by Django 3.0.8 on 2020-08-30 08:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0036_auto_20200830_0521'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coupon',
            name='today_date',
        ),
    ]

# Generated by Django 3.0.8 on 2020-08-30 02:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0033_coupon_today_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coupon',
            name='today_date',
            field=models.DateField(auto_now=True, null=True),
        ),
    ]

# Generated by Django 3.0.8 on 2020-08-30 02:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0032_auto_20200830_0050'),
    ]

    operations = [
        migrations.AddField(
            model_name='coupon',
            name='today_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]

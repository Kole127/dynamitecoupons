# Generated by Django 3.0.8 on 2020-08-13 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0010_auto_20200813_1823'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coupon',
            name='is_valid',
            field=models.BooleanField(default=True),
        ),
    ]
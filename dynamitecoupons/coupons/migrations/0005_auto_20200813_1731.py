# Generated by Django 3.0.8 on 2020-08-13 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0004_auto_20200813_1719'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='coupon',
            name='valid',
        ),
        migrations.AddField(
            model_name='coupon',
            name='is_valid',
            field=models.BooleanField(default=True),
        ),
    ]
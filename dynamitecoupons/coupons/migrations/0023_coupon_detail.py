# Generated by Django 3.0.8 on 2020-08-25 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coupons', '0022_auto_20200825_1558'),
    ]

    operations = [
        migrations.CreateModel(
            name='Coupon_Detail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('c_type', models.CharField(max_length=100)),
            ],
        ),
    ]
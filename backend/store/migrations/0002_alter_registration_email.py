# Generated by Django 5.1.2 on 2025-03-01 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]

# Generated by Django 5.1.2 on 2024-11-30 13:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='videosite',
            name='image',
        ),
    ]
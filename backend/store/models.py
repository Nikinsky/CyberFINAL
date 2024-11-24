from django.contrib.staticfiles.views import serve
from django.db import models
from django.db.models import Model


class News(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField()
    date = models.DateField()
    image = models.ImageField(null=True, blank=True)

    def __str__(self):
        return f'{self.title}'

class Raspisanie(models.Model):
    title = models.CharField(max_length=64)
    description = models.TextField()
    image = models.ImageField(null=True, blank=True)
    address = models.CharField(max_length=64)
    date = models.DateTimeField()


    def __str__(self):
        return f'{self.title} - {self.address}'

class Registration(models.Model):
    name = models.CharField(max_length=32)
    email = models.EmailField()
    telegram = models.CharField(max_length=16)


    def __str__(self):
        return f'{self.name} - {self.email}'

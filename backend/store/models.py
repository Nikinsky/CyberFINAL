from django.contrib.staticfiles.views import serve
from django.db import models
from django.db.models import Model
from django.utils import timezone


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

    @property
    def countdown(self):
        """
        Возвращает оставшееся время до мероприятия в формате
        "день:час:минута:секунда". Если мероприятие уже началось,
        возвращается "0:00:00:00".
        """
        now = timezone.now()
        if self.date <= now:
            return "0:00:00:00"

        diff = self.date - now
        total_seconds = int(diff.total_seconds())

        days, remainder = divmod(total_seconds, 86400)  # 86400 секунд в дне
        hours, remainder = divmod(remainder, 3600)        # 3600 секунд в часе
        minutes, seconds = divmod(remainder, 60)

        return f"{days}:{hours:02}:{minutes:02}:{seconds:02}"



class Registration(models.Model):
    name = models.CharField(max_length=32)
    email = models.EmailField()
    telegram = models.CharField(max_length=16)


    def __str__(self):
        return f'{self.name} - {self.email}'

class VideoSite(models.Model):
    video = models.FileField()




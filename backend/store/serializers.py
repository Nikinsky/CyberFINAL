from .models import *
from rest_framework import serializers


class NewsSerializers(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'date', 'image']

class NewsDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'date', 'description']


class RaspisanieTimerSerializer(serializers.ModelSerializer):
    countdown = serializers.SerializerMethodField()
    date = serializers.DateTimeField(format("%d-%m-%Y"))
    class Meta:
        model = Raspisanie
        fields = ['title', 'address', 'date', 'countdown']

    def get_countdown(self, obj):
        return obj.countdown  # или, если нужна дополнительная обработка, делайте её здесь

class RaspisanieFullSerializer(serializers.ModelSerializer):
    countdown = serializers.SerializerMethodField()
    date = serializers.DateTimeField(format("%d-%m-%Y"))
    class Meta:
        model = Raspisanie
        fields = ['title', 'description', 'image', 'address', 'date', 'countdown']

    def get_countdown(self, obj):
        return obj.countdown  # или, если нужна дополнительная обработка, делайте её здесь


class RegistrationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = "__all__"


class VideoSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoSite
        fields = "__all__"

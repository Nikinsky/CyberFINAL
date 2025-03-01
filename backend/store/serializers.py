from .models import *
from rest_framework import serializers


class NewsSerializers(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'date', 'image']

class NewsDetailSerializers(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'date', 'description', 'description2', 'description3']


class RaspisanieTimerSerializer(serializers.ModelSerializer):
    countdown = serializers.SerializerMethodField()
    date = serializers.DateTimeField(format("%d-%m-%Y"))
    class Meta:
        model = Raspisanie
        fields = ['title', 'address', 'date', 'countdown']

    def get_countdown(self, obj):
        return obj.countdown  # или, если нужна дополнительная обработка, делайте её здесь

class RaspisanieListSerializer(serializers.ModelSerializer):
    date = serializers.DateTimeField(format("%d-%m-%Y"))
    class Meta:
        model = Raspisanie
        fields = ['title', 'image', 'address', 'date']


class RaspisanieDetailSerializer(serializers.ModelSerializer):
    date = serializers.DateTimeField(format("%d-%m-%Y"))
    countdown = serializers.SerializerMethodField()

    class Meta:
        model = Raspisanie
        fields = ['id', 'title', 'description', 'description2', 'description3', 'image', 'address', 'date', 'countdown']


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

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

class RaspisanieSerializers(serializers.ModelSerializer):
    class Meta:
        model = Raspisanie
        fields = "__all__"



class RegistrationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = "__all__"


class VideoSiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoSite
        fields = "__all__"

from .models import *
from rest_framework import serializers


class NewsSerializers(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"


class RaspisanieSerializers(serializers.ModelSerializer):
    class Meta:
        model = Raspisanie
        fields = "__all__"


class RegistrationSerializers(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = "__all__"



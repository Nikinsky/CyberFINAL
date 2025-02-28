from rest_framework import viewsets, permissions, generics
from .serializers import *


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializers

class NewsDetailViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializers

class RaspisanieViewSet(viewsets.ModelViewSet):
    queryset = Raspisanie.objects.all()
    serializer_class = RaspisanieFullSerializer

class RaspisanieTimerViewSet(viewsets.ModelViewSet):
    queryset = Raspisanie.objects.all()
    serializer_class = RaspisanieTimerSerializer


class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializers


class VideoSiteViewSet(generics.ListAPIView):
    queryset = VideoSite.objects.all()
    serializer_class = VideoSiteSerializer
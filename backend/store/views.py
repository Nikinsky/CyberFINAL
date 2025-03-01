from rest_framework import viewsets, permissions, generics
from .serializers import *
import requests


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializers

class NewsDetailViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsDetailSerializers

class RaspisanieListViewSet(viewsets.ModelViewSet):
    queryset = Raspisanie.objects.all()
    serializer_class = RaspisanieListSerializer

class RaspisanieDetailViewSet(viewsets.ModelViewSet):
    queryset = Raspisanie.objects.all()
    serializer_class = RaspisanieDetailSerializer

class RaspisanieTimerViewSet(viewsets.ModelViewSet):
    queryset = Raspisanie.objects.all()
    serializer_class = RaspisanieTimerSerializer




# Замените на ваш токен и chat_id группы
TELEGRAM_BOT_TOKEN = "7903489369:AAHKhWwluOb3PopSFilUpeT7MUf-WIcJ0Z0"
TELEGRAM_CHAT_ID = "-1002250661459"

def send_telegram_message(message):
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    data = {"chat_id": TELEGRAM_CHAT_ID, "text": message}
    requests.post(url, data=data)

class RegistrationViewSet(generics.CreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializers

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)

        # Получаем данные из запроса
        name = request.data.get("name")
        email = request.data.get("email")
        telegram = request.data.get("telegram")

        # Формируем сообщение для Telegram
        message = f"🆕 Новый пользователь зарегистрирован:\n👤 Имя: {name}\n📧 Email: {email}\n💬 Telegram: @{telegram}"

        # Отправляем в Telegram
        send_telegram_message(message)

        return response



class VideoSiteViewSet(generics.ListAPIView):
    queryset = VideoSite.objects.all()
    serializer_class = VideoSiteSerializer
from django.urls import path
from .views import *


urlpatterns = [
    path('news', NewsViewSet.as_view({'get': 'list',}), name='news_list'),
    path('news/<int:pk>/', NewsDetailViewSet.as_view({'get':'retrieve',}), name='news_detail'),

    path('raspi', RaspisanieListViewSet.as_view({'get': 'list',}), name='raspisanie_list'),
    path('raspi/<int:pk>/', RaspisanieDetailViewSet.as_view({'get': 'retrieve',}), name='raspisanie_detail'),

    path('raspi_timer/<int:pk>/', RaspisanieTimerViewSet.as_view({'get': 'retrieve'}, name='raspi_timer-list')),

    path('registration', RegistrationViewSet.as_view(), name='registration_create'),

    path('video_site', VideoSiteViewSet.as_view(), name='video_site')

]
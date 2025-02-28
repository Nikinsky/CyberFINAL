from django.urls import path
from .views import *


urlpatterns = [

    path('news', NewsViewSet.as_view({'get': 'list',}), name='news_list'),
    path('news/<int:pk>/', NewsDetailViewSet.as_view({'get':'retrieve',}), name='news_detail'),

    path('raspi', RaspisanieViewSet.as_view({'get': 'list',}), name='raspisanie_list'),
    path('raspi_timer', RaspisanieTimerViewSet.as_view({'retrieve': 'list'}, name='raspi_timer')),
    path('raspi/<int:pk>/', RaspisanieViewSet.as_view({'get': 'retrieve',}), name='raspisanie_detail'),

    path('registration', RegistrationViewSet.as_view({'get': 'list', 'post': 'create'}), name='registration_list'),
    path('registration/<int:pk>/', RegistrationViewSet.as_view({'get': 'retrieve',}), name='registration_detail'),

    path('video_site', VideoSiteViewSet.as_view(), name='video_site')

]
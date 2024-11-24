

from django.urls import path
from .views import *


urlpatterns = [

    path('news', NewsViewSet.as_view({'get': 'list', 'post': 'create'}), name='news_list'),
    path('news/<int:pk>/', NewsViewSet.as_view({'get':'retrieve', 'put': 'update', 'delete': 'destroy'}), name='news_detail'),

    path('raspi', RaspisanieViewSet.as_view({'get': 'list', 'post': 'create'}), name='raspisanie_list'),
    path('raspi/<int:pk>/', RaspisanieViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='raspisanie_detail'),

    path('registration', RegistrationViewSet.as_view({'get': 'list', 'post': 'create'}), name='registration_list'),
    path('registration/<int:pk>/', RegistrationViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='registration_detail'),


]
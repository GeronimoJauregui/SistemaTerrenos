from django.urls import path
from bases.views import Home, Inicio

urlpatterns = [
    path('',Home.as_view(), name= 'home'),
    path('inicio/',Inicio.as_view(), name= 'inicio'),
]
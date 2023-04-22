from django.urls import path

from . import views

urlpatterns = [
    path("test/", views.test),
    path("login/", views.login),
    path("get_data/", views.get_data)
]
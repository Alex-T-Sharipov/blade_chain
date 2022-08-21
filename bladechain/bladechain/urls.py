"""bladechain URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from users import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.Login.as_view()),
    path('registration/', views.Register.as_view()),
    path('home/', views.HomePage.as_view()),
    path('quests/', views.Quests.as_view()),
    path(
        "quests/<str:id>/",
        views.UniqueQuest.as_view(),
    ),
    path(
        "profile/",
        views.Profile.as_view(),
    ),
    path(
        "market/",
        views.Market.as_view(),
    )
]

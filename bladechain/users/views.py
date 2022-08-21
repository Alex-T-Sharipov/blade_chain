from unicodedata import name
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, renderers
from rest_framework.response import Response
import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenVerifySerializer
from .models import Quest, Adventure_NFT
from .serializers import QuestSerializer, NFTSerializer, Detail
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.tokens import RefreshToken
import sys, os
import subprocess
from subprocess import PIPE

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
User = get_user_model()

def get_user(self, token):
    TokenVerifySerializer.validate(self, attrs={"token": token})
    dictionary = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
    user_id = dictionary["user_id"]
    user = User.objects.get(id=user_id)
    return user

class Register(APIView):
    permission_classes = [permissions.AllowAny]
    renderer_classes = [renderers.JSONRenderer]
    def post(self, request):
        data = request.data
        if "username" in data and "email" in data and "password1" in data and "password2" in data:
            if data["password1"] == data["password2"]:
                user = User.objects.create_user(
                    username=data["username"],
                    email=data["email"],
                    password=data["password1"]
                )
                user.set_password(data["password1"])
                user.save()
                tokens = get_tokens_for_user(user)
                return Response(
                    status=200,
                    data={
                        "message": "User created successfully",
                        "user": Detail(user).data,
                        "access_token": tokens["access"],
                        "refresh_token": tokens["refresh"],
                        }
                )
            return Response(
                status=400,
                data={"error": "Passwords do not match"}
            )

class Login(APIView):
    permission_classes = [permissions.AllowAny]
    renderer_classes = [renderers.JSONRenderer]
    def post(self, request):
        data = request.data
        if "username" in data and "password" in data:
            user = get_object_or_404(User.objects.all(), username = data["username"])
            if user:
                if user.check_password(data["password"]):
                    tokens = get_tokens_for_user(user)
                    return Response(
                        status=200,
                        data={
                            "message": "User logged in successfully",
                            "user": Detail(user).data,
                            "access_token": tokens["access"],
                            "refresh_token": tokens["refresh"],
                        }
                    )
        return Response(
            status=400,
            data={"error": "Incorrect password"}
        )


class HomePage(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        user = get_user(self, request.META["HTTP_AUTHORIZATION"])
        if user:
            return Response(
                status=200,
            )
        return Response(status=401, data={"error": "Unauthorized"})

class Quests(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        user = get_user(self, request.META["HTTP_AUTHORIZATION"])
        if user:
            return Response(
                status=200,
                data = QuestSerializer(Quest.objects.all(), many=True).data,
            )
        return Response(status=401, data={"error": "Unauthorized"})

class UniqueQuest(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request, *args, **kwargs):
        id = kwargs["id"]
        user = get_user(self, request.META["HTTP_AUTHORIZATION"])
        if user:
            return Response(
                status=200,
                data = QuestSerializer(get_object_or_404(Quest.objects.all(), id=id), many=False).data,
            )
        return Response(status=401, data={"error": "Unauthorized"})

class Profile(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        user = get_user(self, request.META["HTTP_AUTHORIZATION"])
        print([f.name for f in Adventure_NFT._meta.get_fields()])
        new_nft = Adventure_NFT(
            id = 1,
            name="Test",
            owner=user.username,
            image="hello",
            location="world",
            creator=user.username,
        )
        new_nft.save()
        print(NFTSerializer(new_nft).data)
        # print(NFT.objects.all())
        # print(NFT.objects.filter(owner="a"))
        nfts = NFTSerializer(Adventure_NFT.objects.filter(owner = user.username), many=True).data
        if user:
            return Response(
                status=200,
                data = {
                    "username": user.username,
                    "nfts": nfts,
                },
            )
        return Response(status=401, data={"error": "Unauthorized"})

class Market(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        output = subprocess.run(args="python3 ../master.py ".split(" "), stdin=PIPE, stdout=PIPE).stdout.decode("utf-8")
        user = get_user(self, request.META["HTTP_AUTHORIZATION"])
        if user:
            return Response(
                status=200,
                data = {
                    "nfts": output,
                },
            )
        return Response(status=401, data={"error": "Unauthorized"})

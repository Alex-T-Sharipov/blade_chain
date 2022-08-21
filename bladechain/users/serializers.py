from rest_framework import exceptions, serializers
from .models import Quest, Adventure_NFT
from django.contrib.auth import get_user_model
User = get_user_model()

class Detail(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email']

class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quest
        fields = ['title', 'body', 'alt', 'location', 'image', 'rules', 'id']

class NFTSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adventure_NFT
        fields = ['id', 'name', 'owner', 'image', 'location', 'creator', "price", "on_sale"]
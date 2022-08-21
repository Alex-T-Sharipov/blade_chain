from django.db import models

class Quest(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    alt = models.TextField()
    location = models.CharField(max_length=255)
    image = models.TextField()
    rules = models.TextField()

class Adventure_NFT(models.Model):
    id = models.IntegerField(unique=True, primary_key=True)
    name = models.CharField(max_length=255)
    owner = models.CharField(max_length=255)
    image = models.TextField()
    location = models.CharField(max_length=255)
    creator = models.CharField(max_length=255, default = None)
    on_sale = models.BooleanField(default=False)
    price = models.IntegerField(default=0)
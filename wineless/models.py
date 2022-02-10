from django.db import models

# Create your models here.
class Location(models.Model):
    city = models.CharField(max_length=100)
    photo_url = models.TextField()
    description = models.TextField()
    def __str__(self):
        return self.city

class User(models.Model):
    username= models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email=models.CharField(max_length=100, unique=True)
    password=models.CharField(max_length=100)
    photo_url = models.TextField()
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='user')

    def __str__(self):
        return self.username

class Store(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    photo_url = models.TextField()
    description = models.TextField()
    type= models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='store')
    def __str__(self):
        return self.name
from django.shortcuts import render, redirect

from rest_framework import generics
from .serializers import LocationSerializer, UserSerializer, StoreSerializer
from .models import Location, User, Store



class LocationList(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class LocationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class UserList(generics.ListCreateAPIView): 
    queryset = User.objects.all() 
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = User.objects.all() 
    serializer_class = UserSerializer 

class StoreList(generics.ListCreateAPIView): 
    queryset = Store.objects.all() 
    serializer_class = StoreSerializer

class StoreDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Store.objects.all() 
    serializer_class = StoreSerializer 
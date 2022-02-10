from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('locations/', views.LocationList.as_view(), name='location_list'),
    path('locations/<int:pk>', views.LocationDetail.as_view(), name='location_detail'),
    path('stores/', views.StoreList.as_view(), name='store_list'),
    path('stores/<int:pk>', views.StoreDetail.as_view(), name='store_detail'),
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail')

]
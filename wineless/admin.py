from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import User, Store, Location

admin.site.register(User)
admin.site.register(Store)
admin.site.register(Location)
from rest_framework import serializers
from .models import Location, User, Store


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    # stores = serializers.HyperlinkedRelatedField(
    #     view_name='store_detail',
    #     many=True,
    #     read_only=True
    # )

    # users = serializers.HyperlinkedRelatedField(
    #     view_name='user_detail',
    #     many=True,
    #     read_only=True
    # )

    location_url = serializers.ModelSerializer.serializer_url_field(
        view_name='location_detail'
    )

    class Meta:
        model = Location
        fields = ('id', 'city', 'photo_url', 'description', 'location_url')


class StoreSerializer(serializers.HyperlinkedModelSerializer):
    location = serializers.HyperlinkedRelatedField(
        view_name='location_detail',
        read_only=True
    )
    location_id = serializers.PrimaryKeyRelatedField(
        queryset=Location.objects.all(),
        source='location'
    )

    class Meta:
        model = Store
        fields = ('location_id', 'name', 'address', 'photo_url', 'description',
            'type', 'price', 'location')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    location = serializers.HyperlinkedRelatedField(
        view_name='location_detail',
        read_only=True
    )
    location_id = serializers.PrimaryKeyRelatedField(
        queryset=Location.objects.all(),
        source='location'
    )

    class Meta:
        model = User
        fields = ('location_id', 'photo_url', 'username',
            'first_name', 'last_name', 'email', 'password', 'location')

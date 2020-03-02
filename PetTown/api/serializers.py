from rest_framework import serializers
from rest_framework import serializers as drf
from . import models

#creating serializers!
class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id','orgID','name','status','lastUpdated','species','breed',
        'sex','size',)
        model = models.Animal

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:        
        fields = ('id','name','address','city','state','zip','country','phone','email',
        'orgurl','created')
        
        model = models.Organization

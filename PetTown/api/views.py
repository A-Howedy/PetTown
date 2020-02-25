from django.shortcuts import render
from rest_framework import generics, viewsets
from .models import Animal, Organization
from .serializers import AnimalSerializer, OrganizationSerializer
# Create your views here.
#hello!
class AnimalList(generics.ListCreateAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class AnimalDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer

class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all().order_by('name')
    serializer_class = AnimalSerializer

class OrganizationList(generics.ListCreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

class OrganizationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all().order_by('name')
    serializer_class = OrganizationSerializer
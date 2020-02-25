from django.db import models
from datetime import datetime, timedelta
import time
# Create your models here.
#it is time to create the models!
class Organization(models.Model):
    #This data is liable to change with the future uh oh!
    name = models.CharField(max_length=128, unique=True)
    address = models.CharField(max_length=128)
    city = models.CharField(max_length=128)
    state = models.CharField(max_length=128)
    zip = models.CharField(max_length=128)
    country = models.CharField(max_length=128)
    phone = models.CharField(max_length=128)
    email = models.CharField(max_length=128)
    orgurl = models.CharField(max_length=128)
    created = models.DateTimeField(auto_now_add=True)
    def __str__(self)
        return str(self.name.title())

class Animal(models.Model):
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE)
    name = models.CharField(max_length=128)
    status = models.CharField(max_length=128)
    lastUpdated = models.CharField(max_length=128)
    species = models.CharField(max_length=128)
    breed = models.CharField(max_length=128)
    sex = models.CharField(max_length=128)
    size = models.CharField(max_length=128)

    def __str__(self):
        return(f"{self.name.title()}: {self.organization.title()}")
    
from django.db import models
from datetime import datetime, timedelta
import time
# Create your models here.
#it is time to create the models!
class Organization(models.Model):
    #This data is liable to change with the future uh oh!
    orgID = models.CharField(max_length=128, unique = False, blank = True)
    name = models.CharField(max_length=128, unique = False)
    address = models.CharField(max_length=128,blank = True)
    city = models.CharField(max_length=128,blank = True)
    state = models.CharField(max_length=128,blank = True)
    zip = models.CharField(max_length=128,blank = True)
    country = models.CharField(max_length=128,blank = True)
    phone = models.CharField(max_length=128,blank = True)
    email = models.CharField(max_length=128,blank = True)
    orgurl = models.CharField(max_length=128,blank = True)
    created = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.name.title())

class Animal(models.Model):
    orgID = models.ForeignKey('Organization', on_delete=models.CASCADE)
    name = models.CharField(max_length=128,blank = True)
    status = models.CharField(max_length=128,blank = True)
    lastUpdated = models.CharField(max_length=128,blank = True)
    species = models.CharField(max_length=128,blank = True)
    breed = models.CharField(max_length=128,blank = True)
    sex = models.CharField(max_length=128,blank = True)
    size = models.CharField(max_length=128,blank = True)

    def __str__(self):
        return(f"{self.name.title()}: {self.organization.title()}")
    

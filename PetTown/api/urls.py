#it is time for urls in the api!!!
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views
#create the router!! 

router = DefaultRouter()
router.register('animals', views.AnimalViewSet)
router.register('organizations',views.OrganizationViewSet)

urlpatterns = router.urls
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("admin/", admin.site.urls),
]

media_urls = static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += media_urls

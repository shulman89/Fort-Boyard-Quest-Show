from django.contrib import admin
from django.urls import path
from backend.views import *
from . import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('order/', GuestView.as_view()),
    path('present/', PresentView.as_view()),
    path('content/landing/', ContentLandingView.as_view()),
    path('content/ddr/', ContentDdrView.as_view()),
    path('content/vdr/', ContentVdrView.as_view()),
    path('content/vyp/', ContentVipView.as_view()),
    path('content/corp/', ContentCorpView.as_view()),
    path('holiday/', PrazdnikiView.as_view()),
    path('corporate/', CorporativiView.as_view()),
    path('birthday/', DniRozhdeniaView.as_view()),
    path('graduation/', VipusknoyView.as_view()),
    path('contacts/', ContactsView.as_view()),
    path('policy/', PrivacyPolicyView.as_view()),
    path('yandex-api/', YandexApiView.as_view()),
    path('videootzivy/', VideoOtzivyView.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

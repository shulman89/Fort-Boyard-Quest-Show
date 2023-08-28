from rest_framework import generics

from .models import Guest
from .serializers import *


class GuestView(generics.ListCreateAPIView):
    queryset = Guest.objects.all()
    serializer_class = GuestSerializer

class PresentView(generics.ListAPIView):
    queryset = Present.objects.all()
    serializer_class = PresentSerializer

class ContentLandingView(generics.ListAPIView):
    queryset = ContentLanding.objects.all()
    serializer_class = ContentLandingSerializer

class ContentDdrView(generics.ListAPIView):
    queryset = ContentDdr.objects.all()
    serializer_class = ContentDdrSerializer

class ContentVdrView(generics.ListAPIView):
    queryset = ContentVdr.objects.all()
    serializer_class = ContentVdrSerializer

class ContentVipView(generics.ListAPIView):
    queryset = ContentVip.objects.all()
    serializer_class = ContentVipSerializer

class ContentCorpView(generics.ListAPIView):
    queryset = ContentCorp.objects.all()
    serializer_class = ContentCorpSerializer

class VipusknoyView(generics.ListAPIView):
    queryset = Vipusknoy.objects.all()
    serializer_class = VipusknoySerializer

class PrazdnikiView(generics.ListAPIView):
    queryset = Prazdniki.objects.all()
    serializer_class = PrazdnikiSerializer

class CorporativiView(generics.ListAPIView):
    queryset = Corporativi.objects.all()
    serializer_class = CorporativiSerializer

class DniRozhdeniaView(generics.ListAPIView):
    queryset = DniRozhdenia.objects.all()
    serializer_class = DniRozhdeniaSerializer

class ContactsView(generics.ListAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer

class PrivacyPolicyView(generics.ListAPIView):
    queryset = PrivacyPolicy.objects.all()
    serializer_class = PrivacyPolicySerializer

class YandexApiView(generics.ListAPIView):
    queryset = YandexApi.objects.all()
    serializer_class = YandexApiSerializer

class VideoOtzivyView(generics.ListAPIView):
    queryset = VideoOtzivy.objects.all()
    serializer_class = VideoOtzivySerializer




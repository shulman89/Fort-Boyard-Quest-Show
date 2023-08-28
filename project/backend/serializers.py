from rest_framework import serializers

from .models import *


class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = "__all__"


class PresentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Present
        fields = "__all__"


class ContentLandingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentLanding
        fields = "__all__"


class ContentDdrSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentDdr
        fields = "__all__"


class ContentVdrSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentVdr
        fields = "__all__"


class ContentVipSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentVip
        fields = "__all__"


class ContentCorpSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentCorp
        fields = "__all__"


class VipusknoySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vipusknoy
        fields = "__all__"


class PrazdnikiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prazdniki
        fields = "__all__"


class CorporativiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Corporativi
        fields = "__all__"


class DniRozhdeniaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DniRozhdenia
        fields = "__all__"


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = "__all__"


class PrivacyPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = PrivacyPolicy
        fields = "__all__"


class YandexApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = YandexApi
        fields = "__all__"

class VideoOtzivySerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoOtzivy
        fields = "__all__"



from django.db import models


class Guest(models.Model):
    guest_name = models.CharField(max_length=250, verbose_name='Имя', blank=True)
    phone_number = models.CharField(max_length=250, verbose_name='Номер телефона')
    time_created = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания заявки')
    holiday_type = models.CharField(max_length=250, verbose_name='Тип мероприятия', blank=True)
    guest_type = models.CharField(max_length=250, verbose_name='Для кого', blank=True)
    guest_qty = models.IntegerField(verbose_name='Количество гостей', blank=True, null=True)
    additions = models.TextField(verbose_name='Доп.услуги', blank=True)
    present = models.CharField(max_length=250, verbose_name='Подарок', blank=True)
    date = models.DateField(verbose_name='Дата', blank=True, null=True)

    def __str__(self):
        return f'{self.guest_name}   |   {self.phone_number}   |   Дата заявки - {self.time_created}'

    class Meta:
        verbose_name = 'Заявки'
        verbose_name_plural = 'Заявки'


class Present(models.Model):
    var = models.CharField(max_length=250, verbose_name="Вариант подарка")
    img = models.ImageField(upload_to='landing', height_field=None, width_field=None, verbose_name='Картинка')

    def __str__(self):
        return self.var

    class Meta:
        verbose_name = 'Подарки'
        verbose_name_plural = 'Подарки'


class ContentLanding(models.Model):
    slogan1 = models.TextField(verbose_name='Заголовок')
    slogan2 = models.TextField(verbose_name='Подзаголовок')
    pic = models.ImageField(upload_to='landing', height_field=None, width_field=None, verbose_name='Картинка',max_length=100)

    def __str__(self):
        return "Контент "

    class Meta:
        verbose_name = 'Контент "Landing"'
        verbose_name_plural = 'Контент "Landing"'


class ContentDdr(models.Model):
    slogan1 = models.TextField(verbose_name='Заголовок')
    slogan2 = models.TextField(verbose_name='Подзаголовок')
    pic = models.ImageField(upload_to='ddr', height_field=None, width_field=None, max_length=100,
                            verbose_name='Картинка')

    def __str__(self):
        return "Контент "

    class Meta:
        verbose_name = 'Контент "DDR"'
        verbose_name_plural = 'Контент "DDR"'


class ContentVdr(models.Model):
    slogan1 = models.TextField(verbose_name='Заголовок')
    slogan2 = models.TextField(verbose_name='Подзаголовок')
    pic = models.ImageField(upload_to='vdr', height_field=None, width_field=None, max_length=100,
                            verbose_name='Картинка')

    def __str__(self):
        return "Контент "

    class Meta:
        verbose_name = 'Контент "VDR"'
        verbose_name_plural = 'Контент "VDR"'


class ContentVip(models.Model):
    slogan1 = models.TextField(verbose_name='Заголовок')
    slogan2 = models.TextField(verbose_name='Подзаголовок')
    pic = models.ImageField(upload_to='vip', height_field=None, width_field=None, max_length=100,
                            verbose_name='Картинка')

    def __str__(self):
        return "Контент "

    class Meta:
        verbose_name = 'Контент "VYP"'
        verbose_name_plural = 'Контент "VYP"'


class ContentCorp(models.Model):
    slogan1 = models.TextField(verbose_name='Заголовок')
    slogan2 = models.TextField(verbose_name='Подзаголовок')
    pic = models.ImageField(upload_to='corp', height_field=None, width_field=None, max_length=100,
                            verbose_name='Картинка')

    def __str__(self):
        return "Контент "

    class Meta:
        verbose_name = 'Контент "Corp"'
        verbose_name_plural = 'Контент "Corp"'


class Vipusknoy(models.Model):
    image = models.ImageField(upload_to='vipusknoy', height_field=None, width_field=None, max_length=100,
                              verbose_name='Фото выпускного')

    def __str__(self):
        return f'{self.image}'

    class Meta:
        verbose_name = 'Фотографии "Выпускной"'
        verbose_name_plural = 'Фотографии "Выпускной"'


class Prazdniki(models.Model):
    image = models.ImageField(upload_to='prazdniki', height_field=None, width_field=None, max_length=100,
                              verbose_name='Праздники')

    def __str__(self):
        return f'{self.image}'

    class Meta:
        verbose_name = 'Фотографии "Праздники"'
        verbose_name_plural = 'Фотографии "Праздники"'


class Corporativi(models.Model):
    image = models.ImageField(upload_to='corporativy', height_field=None, width_field=None, max_length=100,
                              verbose_name='Корпоративы')

    def __str__(self):
        return f'{self.image}'

    class Meta:
        verbose_name = 'Фотографии "Корпоративы"'
        verbose_name_plural = 'Фотографии "Корпоративы"'


class DniRozhdenia(models.Model):
    image = models.ImageField(upload_to='dni_rojdenia', height_field=None, width_field=None, max_length=100,
                              verbose_name='Дни рождения')

    def __str__(self):
        return f'{self.image}'

    class Meta:
        verbose_name = 'Фотографии "Дни рождения"'
        verbose_name_plural = 'Фотографии "Дни рождения"'


class VideoOtzivy(models.Model):
    video_url = models.URLField(verbose_name='Видео отзыв')

    def __str__(self):
        return f'{self.video_url}'

    class Meta:
        verbose_name = 'Видео отзывы'
        verbose_name_plural = 'Видео отзывы'


class Contacts(models.Model):
    phone_clickable = models.CharField(max_length=250, verbose_name='Номер (click)')
    phone = models.CharField(max_length=250, verbose_name='Номер телефона')
    vk = models.URLField(verbose_name='Вконтакте')
    whatsapp = models.URLField(verbose_name='whatsapp')
    odnoklassniki = models.URLField(verbose_name='Одноклассники')
    address = models.TextField(verbose_name='Адрес')
    how_get = models.URLField(verbose_name='Как проехать')

    def __str__(self):
        return 'Контакты'

    class Meta:
        verbose_name = 'Контакты'
        verbose_name_plural = 'Контакты'


class PrivacyPolicy(models.Model):
    organization = models.CharField(max_length=250, verbose_name='Тип ЮрЛица, название организации')
    ogrn = models.CharField(max_length=250, verbose_name='ОГРН')
    inn = models.CharField(max_length=250, verbose_name='ИНН')
    kpp = models.CharField(max_length=250, verbose_name='КПП')
    address = models.TextField(verbose_name='Юр. Адрес')

    def __str__(self):
        return self.organization

    class Meta:
        verbose_name = 'Политика защиты и обработки'
        verbose_name_plural = 'Политика защиты и обработки'


class YandexApi(models.Model):
    url1 = models.URLField(verbose_name='Ссылка1')
    url2 = models.URLField(verbose_name='Ссылка2')

    def __str__(self):
        return self.url1

    class Meta:
        verbose_name = 'Яндекс API url'
        verbose_name_plural = 'Яндекс API url'

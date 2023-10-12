from django.contrib import admin
from . models import subscribe

@admin.register(subscribe)
class SubscribeAdmin(admin.ModelAdmin):
    list_display = ['email','date']
    list_filter = ['date']

from django import forms
from . models import subscribe

class SubscribeFrom(forms.ModelForm):
    class Meta:
        model = subscribe
        fields = ['email']
        widgets = {
             'email': forms.EmailInput(attrs={'placeholder': 'Email'})
        }

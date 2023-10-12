from django.db import models

# Create your models here.


class subscribe(models.Model):
    email = models.EmailField(verbose_name="  ",null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.email}'
    
    class Meta:
        verbose_name = 'Email de Remarketing'
        verbose_name_plural = 'Emails para Remarketing'
        ordering = ['-date']
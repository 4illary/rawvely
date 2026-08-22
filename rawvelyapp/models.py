from django.db import models


class Serie(models.Model):
    titulo = models.CharField(max_length=100)
    sinopse = models.TextField()
    capa = models.ImageField(upload_to='series/')
    genero = models.CharField(max_length=100)
    ano = models.IntegerField()
    avaliacao = models.DecimalField(max_digits=3, decimal_places=1)

    def __str__(self):
        return self.titulo
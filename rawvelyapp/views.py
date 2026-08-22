from django.shortcuts import render
from .models import Serie


def inicio(request):
    series = Serie.objects.all()

    return render(request, 'series/inicio.html', {
        'series': series
    })
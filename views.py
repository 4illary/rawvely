from django.shortcuts import render
from .models import Serie


def inicio(request):
    series = Serie.objects.all()

    return render(request, 'series/inicio.html', {
        'series': series
    })


def login(request):
    return render(request, 'series/login.html')

def cadastro(request):
    return render(request, 'series/cadastro.html')
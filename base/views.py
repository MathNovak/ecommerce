from django.shortcuts import render

def inicio(request):
    return render(request, 'index.html')

def prod1(request):
    return render(request, 'prod1.html')
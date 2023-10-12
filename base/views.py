from django.shortcuts import render, redirect
from . forms import SubscribeFrom

def inicio(request):
    sucesso = False
    if request.method == 'POST':
        form = SubscribeFrom(request.POST)
        if form.is_valid():
            sucesso = True
            form.save()
            return redirect('/')
    else:
        form = SubscribeFrom()
    context = {
        'form': form,
        'sucesso': sucesso
    }
    return render(request, 'index.html', context)

def prod1(request):
    return render(request, 'prod1.html')
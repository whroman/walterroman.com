from django.shortcuts import render

from imdb import IMDb

import re

def index(request):
	return render(request, 'zerocater/index.html')

def search(request, movie_name):
	ia = IMDb()

	if ia.search_movie(movie_name)[0]:
		movie = ia.search_movie(movie_name)[0]
	movie = ia.get_movie(movie.movieID)
	cast = movie['cast']

	if movie['full-size cover url']:
		image = movie['full-size cover url']
	elif movie['cover url']:
		image = movie['cover url']
	else:
		image = "http://active-e.www-jp.com/notFound1.gif"

	movie_name = movie_name

	context = {
		'movie_name':movie_name, 
		'movie':movie, 
		'cast':cast, 
		'image':image, 
		}

	return render(request, 'zerocater/index.html', context)

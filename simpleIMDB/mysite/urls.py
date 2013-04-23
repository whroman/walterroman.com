from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'walter.views.home', name='home'),
    # url(r'^walter/', include('walter.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),

	(r'^zerocater/$', 'zerocater.views.index'),
	(r'zerocater/(?P<movie_name>.+)/$', 'zerocater.views.search'),
)

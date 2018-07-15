from django.contrib import admin

from qaa.apps.question.models import Question

admin.site.register([Question])
from django.conf.urls import url, include
from rest_framework import routers

from qaa.apps.question.api.views import QuestionViewSet
from qaa.apps.answer.api.views import AnswerViewSet

router = routers.DefaultRouter()
router.register(r'questions', QuestionViewSet)
router.register(r'answers', AnswerViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]

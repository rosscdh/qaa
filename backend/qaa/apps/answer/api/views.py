from rest_framework import viewsets
from qaa.apps.answer.models import Answer
from qaa.apps.answer.api.serializers import AnswerSerializer


class AnswerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

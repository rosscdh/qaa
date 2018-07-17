from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from qaa.apps.question.models import Question
from qaa.apps.question.api.serializers import QuestionSerializer

from qaa.apps.answer.models import Answer
from qaa.apps.answer.api.serializers import (AnswerSerializer,
                                             SimpleAnswerSerializer)


class QuestionViewSet(viewsets.ModelViewSet):
    """
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    @action(methods=['post', 'get'], detail=True)
    def answer(self, request, pk=None):
        question = self.get_object()
        answer, is_new = Answer.objects.get_or_create(q=question)
        serializer = AnswerSerializer(answer, context={'request': request})

        if request.method == 'POST':
            """
            Create a new answer object
            """
            simple_answer_serializer = SimpleAnswerSerializer(data=request.data)
            if simple_answer_serializer.is_valid():
                answer.add_answer(serialized_answer=simple_answer_serializer)
                answer.save(update_fields=['data'])
                serializer = AnswerSerializer(answer, context={'request': request})
                return Response(serializer.data.get('data', {}).get('answers', []))
            else:
                return Response(simple_answer_serializer.errors,
                                status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.data.get('data', {}).get('answers', []))

from rest_framework import serializers

from qaa.apps.question.models import Question
from qaa.apps.answer.api.serializers import AnswerSerializer


class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    #answers = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='api_v1:answer-detail')
    answers = AnswerSerializer(many=True, required=False)

    class Meta:
        model = Question
        fields = ('url', 'id', 'q', 'answers')
        extra_kwargs = {
            'url': {'view_name': 'api_v1:question-detail', 'lookup_field': 'pk'},
        }

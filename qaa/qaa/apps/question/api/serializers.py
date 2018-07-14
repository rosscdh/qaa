from rest_framework import serializers

from qaa.apps.question.models import Question


class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    answers = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='api_v1:answer-detail')

    class Meta:
        model = Question
        fields = ('url', 'q', 'answers')
        extra_kwargs = {
            'url': {'view_name': 'api_v1:question-detail', 'lookup_field': 'pk'},
        }

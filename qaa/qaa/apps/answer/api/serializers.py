from rest_framework import serializers

from qaa.apps.answer.models import Answer


class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Answer
        fields = ('url', 'q', 'a', 'data')
        extra_kwargs = {
            'url': {'view_name': 'api_v1:answer-detail', 'lookup_field': 'pk'},
            'q': {'view_name': 'api_v1:question-detail', 'lookup_field': 'pk'},
        }


class SimpleAnswerSerializer(serializers.Serializer):
    answer = serializers.CharField()
    user = serializers.CharField()
    dateof = serializers.DateTimeField()

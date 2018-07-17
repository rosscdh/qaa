import datetime

from rest_framework import serializers

from qaa.apps.answer.models import Answer


class SimpleAnswerSerializer(serializers.Serializer):
    answer = serializers.CharField()
    user = serializers.CharField()
    dateof = serializers.DateTimeField(initial=datetime.date.today)

    # popularity
    down_votes = serializers.IntegerField(initial=0, default=0)
    up_votes = serializers.IntegerField(initial=0, default=0)

    # sentiment
    polarity = serializers.IntegerField(initial=0, default=0)
    subjectivity = serializers.IntegerField(initial=0, default=0)


class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    answers = SimpleAnswerSerializer(many=True)

    class Meta:
        model = Answer
        fields = ('url', 'a', 'answers')
        extra_kwargs = {
            'url': {'view_name': 'api_v1:answer-detail', 'lookup_field': 'pk'},
            'q': {'view_name': 'api_v1:question-detail', 'lookup_field': 'pk'},
        }

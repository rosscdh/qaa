from django.db import models
from django.contrib.postgres.fields import JSONField


class Answer(models.Model):
    q = models.ForeignKey('question.Question', related_name='answers', null=True, on_delete=models.SET_NULL)
    a = models.TextField(blank=True, null=True)
    data = JSONField(default={})

    # def __str__(self):
    #     return self.a
    @property
    def answers(self):
        answers = self.data.get('answers', [])
        if not self.a:
            return answers
        else:
            return [a] + answers

    def add_answer(self, serialized_answer):
        answers = self.data.get('answers', [])

        answers.append(serialized_answer.data)
        self.data['answers'] = answers

        return self.data.get('answers')

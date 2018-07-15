from django.db import models
from django.contrib.postgres.fields import JSONField


class Question(models.Model):
    q = models.CharField(max_length=255)
    data = JSONField(default={})

    def __str__(self):
        return self.q

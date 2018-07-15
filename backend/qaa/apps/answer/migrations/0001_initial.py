# Generated by Django 2.0.7 on 2018-07-14 18:17

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('question', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('a', models.TextField(blank=True, null=True)),
                ('data', django.contrib.postgres.fields.jsonb.JSONField(default={})),
                ('q', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='question.Question')),
            ],
        ),
    ]
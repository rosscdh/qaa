FROM python:3-alpine

MAINTAINER "sendrossemail@gmail.com"

EXPOSE 8000

WORKDIR /src

ADD . /src

RUN apk update && \
    apk add python3 postgresql-libs && \
    apk add --virtual .build-deps gcc python3-dev musl-dev postgresql-dev && \
    python3 -m pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps

#RUN python -m nltk "nltk.download('stopwords')"

ENTRYPOINT ["python", "manage.py"]

CMD ["runserver_plus", "--threaded", "0.0.0.0:8000"]
QAA
===

**Questions and Answers**

Reddit style vote em up, with a little bit of nlp for fun

```
docker-compose up
```

```
docker compose up db redis
docker compose up web
```

using pdb.set_trace()

```
docker ps
docker attach :container_id
```

## Using the api

```
http post http://localhost:8000/api/v1/questions/ q='How many marbles on a bust?'                                                                                                                                                 rosscdh@s

HTTP/1.0 201 Created
Allow: GET, POST, HEAD, OPTIONS
Content-Length: 99
Content-Type: application/json
Date: Sat, 14 Jul 2018 19:58:15 GMT
Location: http://localhost:8000/api/v1/questions/19/
Server: Werkzeug/0.14.1 Python/3.7.0
Vary: Accept, Cookie
X-Frame-Options: SAMEORIGIN

{
    "answers": [],
    "q": "How many marbles on a bust?",
    "url": "http://localhost:8000/api/v1/questions/19/"
}


% http post http://localhost:8000/api/v1/questions/19/answers/ q='How many marbles on a bust?'                                                                                                                                      rosscdh@s

HTTP/1.0 400 Bad Request
Allow: GET, POST, HEAD, OPTIONS
Content-Length: 110
Content-Type: application/json
Date: Sat, 14 Jul 2018 19:58:30 GMT
Server: Werkzeug/0.14.1 Python/3.7.0
Vary: Accept, Cookie
X-Frame-Options: SAMEORIGIN

{
    "answer": [
        "This field is required."
    ],
    "dateof": [
        "This field is required."
    ],
    "user": [
        "This field is required."
    ]
}


% http post http://localhost:8000/api/v1/questions/19/answers/ answer='24' dateof='2018-07-11 22:30:00' user='Bob'                                                                                                                  rosscdh@s

HTTP/1.0 200 OK
Allow: GET, POST, HEAD, OPTIONS
Content-Length: 62
Content-Type: application/json
Date: Sat, 14 Jul 2018 19:58:57 GMT
Server: Werkzeug/0.14.1 Python/3.7.0
Vary: Accept, Cookie
X-Frame-Options: SAMEORIGIN

[
    {
        "answer": "24",
        "dateof": "2018-07-11T22:30:00Z",
        "user": "Bob"
    }
]

```
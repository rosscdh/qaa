import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Question } from './question';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8000/api/v1/questions/'; // URL to web api

  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http
      .get<Question[]>(this.apiUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getQuestion(id: number): Observable<Question> {
    return this.getQuestions().pipe(
      map(questions => questions.find(question => question.id === id))
    );
  }

  save(question: Question) {
    if (question.id) {
      return this.put(question);
    }
    return this.post(question);
  }

  delete(question: Question) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.apiUrl}/${question.id}`;

    return this.http.delete<Question>(url).pipe(catchError(this.handleError));
  }

  // Add new Question
  private post(question: Question) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Question>(this.apiUrl, question)
      .pipe(catchError(this.handleError));
  }

  // Update existing Question
  private put(question: Question) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.apiUrl}/${question.id}`;

    return this.http.put<Question>(url, question).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}

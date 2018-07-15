import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Answer } from './answer';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private apiUrl = environment.backend.url + '/api/v1/answers'; // URL to web api

  constructor(private http: HttpClient) {}

  getAnswers() {
    return this.http
      .get<Answer[]>(this.apiUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getAnswer(id: number): Observable<Answer> {
    return this.getAnswers().pipe(
      map(answers => answers.find(answer => answer.id === id))
    );
  }

  save(answer: Answer) {
    if (answer.id) {
      return this.put(answer);
    }
    return this.post(answer);
  }

  delete(answer: Answer) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.apiUrl}/${answer.id}`;

    return this.http.delete<Answer>(url).pipe(catchError(this.handleError));
  }

  // Add new Answer
  private post(answer: Answer) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Answer>(this.apiUrl, answer)
      .pipe(catchError(this.handleError));
  }

  // Update existing Answer
  private put(answer: Answer) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.apiUrl}/${answer.id}`;

    return this.http.put<Answer>(url, answer).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}

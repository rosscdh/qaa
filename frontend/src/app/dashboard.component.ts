import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from './Question';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions: Question[] = [];

  constructor(
    private router: Router,
    private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.questionService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  gotoDetail(question: Question): void {
    const link = ['/detail', question.id];
    this.router.navigate(link);
  }
}

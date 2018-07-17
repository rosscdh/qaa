import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  selector: 'my-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.questionService.retrieveQuestion(id).subscribe(question => {
          this.question = question;
        });
      } else {
        this.navigated = false;
        this.question = new Question({});
      }
    });
  }

  save(): void {
    this.questionService.save(this.question).subscribe(question => {
      this.question = new Question(question); // saved question, w/ id if new
      this.goBack(this.question);
    }, error => (this.error = error)); // TODO: Display error message
  }

  goBack(savedQuestion: Question = null): void {
    this.close.emit(savedQuestion);
    if (this.navigated) {
      window.history.back();
    }
  }
}

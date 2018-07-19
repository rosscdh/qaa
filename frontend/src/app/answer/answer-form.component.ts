import { Component, OnInit } from '@angular/core';

import { SubAnswer } from './answer'

@Component({
  selector: 'qaa-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {
 
  submitted = false;
 
  model = new SubAnswer({});

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }
 
  newAnswer(data) {
    this.model = new SubAnswer(data);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}

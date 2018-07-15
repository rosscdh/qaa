import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes.component';

import { HeroSearchComponent } from './hero-search.component';

import { AnswerComponent } from './answer/answer.component';
import { AnswerService } from './answer/answer.service';

import { QuestionComponent } from './question/question.component';
import { QuestionDetailComponent } from './question/question-detail.component';
import { QuestionService } from './question/question.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    QuestionDetailComponent,
    AnswerComponent,
    QuestionComponent,
  ],
  providers: [HeroService, QuestionService, AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

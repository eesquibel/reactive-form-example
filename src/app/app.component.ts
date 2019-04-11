import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { QuestionModel } from './model/question.model';
import { HttpClient } from '@angular/common/http';
import { Answer } from './model/answer.model';

interface AnswerForm {
  Answer: Answer;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-form-example';

  public arrayOfAnswers: FormArray;

  public Questions: QuestionModel[];

  public Score: number;

  constructor(private http: HttpClient) {
  }

  public ngOnInit(): void {
    this.arrayOfAnswers = new FormArray([]);

    this.http.get<QuestionModel[]>('assets/data/questions.json').subscribe(result => this.Questions = result );
  }

  public Save(): void {
    if (this.arrayOfAnswers.valid) {
      const values: AnswerForm[] = this.arrayOfAnswers.value;
      this.Score = values.reduce((total, value) => total + value.Answer.Points , 0);
    }
  }
}

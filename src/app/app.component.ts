import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

import { Answer } from './model/answer.model';
import { QuestionModel } from './model/question.model';

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

  /**
   * Form Array for storing the answers
   */
  public arrayOfAnswers: FormArray;

  /**
   * Array of questions
   */
  public Questions: QuestionModel[];

  /**
   * Computed score
   */
  public Score: number;

  constructor(private http: HttpClient) {
  }

  public ngOnInit(): void {
    // Create an FormArray to store an array of FormGroups that the QuestionComponent will add to
    // Could also just be an array of FormControls
    this.arrayOfAnswers = new FormArray([]);

    // I stored my question data as a JSON file, so we need to fetch it
    this.http.get<QuestionModel[]>('assets/data/questions.json').subscribe(result => this.Questions = result );
  }

  /**
   * Computes the score when the form is submitted
   */
  public Save(): void {
    if (this.arrayOfAnswers.valid) {
      const values: AnswerForm[] = this.arrayOfAnswers.value;
      this.Score = values.reduce((total, value) => total + value.Answer.Points , 0);
    }
  }
}

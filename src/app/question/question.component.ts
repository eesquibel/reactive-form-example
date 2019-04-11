import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { QuestionModel } from '../model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  public parent: FormArray;

  @Input()
  public Data: QuestionModel;

  public form: FormGroup;

  public AnswerRadio: FormControl;

  constructor() { }

  public ngOnInit(): void {

    const defaultValue = null; // this.Data.Answers[2]; // Selects the 3rd (zero index) answer to set as default

    console.log('defaultValue', defaultValue);

    this.AnswerRadio = new FormControl(defaultValue, [Validators.required]);

    this.form = new FormGroup({
      Answer: this.AnswerRadio
    });

    this.parent.push(this.form);
  }
}

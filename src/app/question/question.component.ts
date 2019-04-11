import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { QuestionModel } from '../model/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  /**
   * The Form Array from the parent component
   */
  @Input()
  public parent: FormArray;

  /**
   * The question to display
   */
  @Input()
  public Data: QuestionModel;

  /**
   * The form group for this question, hosts the form controls
   */
  public form: FormGroup;

  /**
   * Quick reference to the radio button control
   */
  public AnswerRadio: FormControl;

  constructor() { }

  public ngOnInit(): void {

    // Default value for the radio button
    const defaultValue = null; // this.Data.Answers[2]; // Selects the 3rd (zero index) answer to set as default

    console.log('defaultValue', defaultValue);

    // Instantiate a form control that represents our radio button
    // Validators.required add a form validator that makes the control required
    this.AnswerRadio = new FormControl(defaultValue, [Validators.required]);

    //  Other validators:
    //    Validators.min(5) // Numberic value must be a miniumum of 5
    //    Validators.minLength(10) // String length must be a minimum of 10
    //    Validators.maxLength(255) // String length must be a maximum of 255
    //    Validators.pattern(/[\w\d\s]+/) // String must match this regular expression

    // Create a form group for this component and add the created form control to it
    this.form = new FormGroup({
      // {Control Name}: {FormControl instance}
      Answer: this.AnswerRadio
    });

    // Add this form group to the Form Array from the parent component
    this.parent.push(this.form);
  }
}

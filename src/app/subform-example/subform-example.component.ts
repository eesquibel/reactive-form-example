import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subform-example',
  templateUrl: './subform-example.component.html',
  styleUrls: ['./subform-example.component.scss']
})
export class SubformExampleComponent implements OnInit {

  @Input()
  public parent: FormGroup;

  @Input()
  public groupName: string;

  @Input()
  public Question1: string;

  @Input()
  public Question2: string;

  public form: FormGroup;

  constructor() {
  }

  public ngOnInit(): void {

    // Create the local FormGroup for this component instance
    this.form = new FormGroup({
      Value: new FormControl(null, [Validators.required]),
      Multiplier: new FormControl(null, [Validators.required]),

      // This is a "hidden" FormControl that isn't attached to a UI element
      // We will update this programmatically
      Result: new FormControl(null, []),
    });

    // Sanity check; make sure the necessarily information was pass to this component
    if (this.parent && this.groupName) {
      // Add this FormGroup to the parent FormGroup under the provided name
      this.parent.addControl(this.groupName, this.form);
    }

    // Watch for form value changes
    this.form.valueChanges.subscribe(values => {
      // If the form is in valid state
      if (this.form.valid) {
        // Do the math
        const result = values.Value * values.Multiplier;

        // The the control value, but don't emit an event (to prevent an infinite loop with valueChanges)
        this.form.get('Result').setValue(result, { emitEvent: false });
      }
    });
  }
}

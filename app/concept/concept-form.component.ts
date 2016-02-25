import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { Concept }    from './concept';

@Component({
  selector: 'concept-form',
  template: '<concept-form></concept-form>'
})
export class ConceptFormComponent {
  subjects = [11, 12, 13, 14, 15];
  model = new Concept(18, 'Multivariable', this.subjects[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

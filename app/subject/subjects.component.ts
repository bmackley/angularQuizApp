import {Component, OnInit} from 'angular2/core';
import {Subject} from './subject';
import {SubjectDetailComponent} from './subject-detail.component';
import {SubjectService} from './subject.service';
import {Concept} from '.concept/concept';
import {ConceptDetailComponent} from './concept-detail.component';
import {ConceptService} from './concept.service'

import {Router } from 'angular2/router';
@Component({
  selector: 'my-subjects',
  templateUrl: 'app/subject/subjects.component.html',
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .subjects {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 10em;
    }
    .subjects li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0em;
      height: 1.6em;
      border-radius: 4px;
    }
    .subjects li.selected:hover {
      color: white;
    }
    .subjects li:hover {
      color: #607D8B;
      background-color: #EEE;
      left: .1em;
    }
    .subjects .text {
      position: relative;
      top: -3px;
    }
    .subjects .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0em 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0px 0px 4px;
    }
  `],
  directives: [SubjectDetailComponent]
})
export class SubjectsComponent implements OnInit {
  // public title = 'Tour of Subjectes';
  public subjects: Subject[];
  public selectedSubject: Subject;
  public concepts: Concept[];
  constructor(private _router: Router, private _subjectService: SubjectService) { }
  getSubjects() {
    this._subjectService.getSubjects().then(subjects => this.subjects = subjects);
  }
  ngOnInit() {
    this.getSubjects();
  }
  onSelect(subject: Subject) { this.selectedSubject = subject; }
  gotoDetail() {
    this._router.navigate(['Concepts', { id: this.selectedSubject.id }]);
  }
}

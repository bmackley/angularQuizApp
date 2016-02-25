import { Component, OnInit } from 'angular2/core';
import {Router } from 'angular2/router';

import {Subject } from './subject/subject'
import { SubjectService } from './subject/subject.service';
@Component({
  selector: 'my-dashboard',
  template: `<h3>Top Subjects</h3>
  <div class="grid grid-pad">
      <div *ngFor="#subject of subjects" (click)="gotoDetail(subject)" class="col-1-4" >
          <div class="module hero">
              <h4>{{subject.name}}</h4>
          </div>
      </div>
  </div>`,
})

export class DashboardComponent implements OnInit {
  subjects: Subject[] = [];
  constructor(private _router: Router, private _subjectService: SubjectService) { }
  ngOnInit() {
    this._subjectService.getSubjects()
      .then(subjects => this.subjects = subjects.slice(1,5));
  }
  gotoDetail(subject: Subject) {
    let link = ['SubjectDetail', { id: subject.id }];
    this._router.navigate(link);
  }
}

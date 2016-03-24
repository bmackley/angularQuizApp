import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import {Subject } from './subject/subject'
import { SubjectService } from './subject/subject.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  subjects: Subject[] = [];
  private _routeParams: RouteParams;
  constructor(private _router: Router, private _subjectService: SubjectService) { }
  ngOnInit() {
    this._subjectService.getSubjects()
      .then(subjects => this.subjects = subjects.slice(1,5));
  }
  gotoDetail(subject: Subject) {
    let link = ['SubjectDetail', { id: subject.id }];
    this._router.navigate(link);
  }
  gotoLogin(){
    this._router.navigate(['Login']);
  }
  gotoSignUp(){
    this._router.navigate(['SignUp']);
  }
}

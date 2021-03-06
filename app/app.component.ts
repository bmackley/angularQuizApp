import { Component }       from 'angular2/core';
import { SubjectService }     from './subject/subject.service';
import { SubjectsComponent } from './subject/subjects.component';
import { ConceptsComponent } from './concept/concepts.component';
import { ConceptService } from './concept/concept.service'
import { DashboardComponent} from './dashboard.component';
import { SubjectDetailComponent} from './subject/subject-detail.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Subjects']">Subjects</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    SubjectService,
    ConceptService,
  ]
})
@RouteConfig([
  {
    path: '/detail/:id',
    name: 'SubjectDetail',
    component: SubjectDetailComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/subjects',
    name: 'Subjects',
    component: SubjectsComponent
  },
  {
    path: '/concepts',
    name: 'Concepts',
    component: ConceptsComponent
  }
])
export class AppComponent {
  title = 'Find Learning Materials';
}

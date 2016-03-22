import { Component, Inject }       from 'angular2/core';
import { SubjectService }     from './subject/subject.service';
import { SubjectsComponent } from './subject/subjects.component';
import { ConceptsComponent } from './concept/concepts.component';
import { ConceptService } from './concept/concept.service'
import { DashboardComponent} from './dashboard.component';
import { SubjectDetailComponent} from './subject/subject-detail.component'
import { LoginComponent } from './shared/authenticate/authenticate.component';
import { SignUpComponent } from './shared/authenticate/create_account.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <!--look up flexbox-->
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Subjects']">Subjects</a>
      <a [routerLink]="['Login']">Login</a>
      <a [routerLink]="['SignUp']">Sign Up</a>
      <a > {{username}} </a>
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
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: SignUpComponent
  }
])
export class AppComponent {
  public username;
  private unsubscribe;
  constructor(@Inject('REDUX_STORE') store){
    this.unsubscribe = store.subscribe(this.mapStateToThis(store))
  }
  mapStateToThis(store){
    return () => {
        const state = store.getState();
        this.username = state.currentUser.email
    }
  }
  ngOnDestroy(){
      this.unsubscribe;
  }
  title = 'Learning Materials';
}

import { Component } from '@angular/core';
import {FirstServiceService} from "./first-service.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {parseJson} from "@angular/cli/src/utilities/json-file";
import {FirstInterceptorInterceptor} from "./first-interceptor.interceptor";

@Component({
  selector: 'app-root',
  template: `
    <div>
      {{results | async | json}}
      <h1>Routes</h1>
      <nav>
        <a routerLink="">Home</a>
        <a routerLink="/student">Student</a>
        <a routerLink="/teacher">Teacher</a>
      </nav>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
  public results: any;
  constructor(http: HttpClient) {
    const path = 'https://localhost:7087/Users/Student'
    this.results=http.get(path);
  }

}

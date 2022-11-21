import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

import {Routes, RouterModule, ROUTES} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {FirstServiceService} from "./first-service.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FirstDirectiveDirective } from './first-directive.directive';
import {FirstInterceptorInterceptor} from "./first-interceptor.interceptor";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentComponent},
  {path: 'teacher', component: TeacherComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    HomeComponent,
    FirstDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [FirstServiceService,
    {provide: HTTP_INTERCEPTORS, useClass: FirstInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {

}

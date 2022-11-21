import { Component } from '@angular/core';
import {FirstServiceService} from "../first-service.service";

@Component({
  selector: 'app-teacher',
  template: `<div align="center">
    <h2>{{name}}</h2>
    <h2>{{surname}}</h2>
  </div>`,
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  public name = "Dmytro";
  public surname = "Syschik";
  constructor(svc: FirstServiceService) {
    svc.consoleText("Hello Teacher Page!");
  }
}

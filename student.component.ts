import { Component } from '@angular/core';
import {FirstServiceService} from "../first-service.service";

@Component({
  selector: 'app-student',
  template: `<div align="center">
    <table width="200">
      <tr>
        <th>Name:</th>
        <th>Surname:</th>
      </tr>
      <tr *ngFor="let StudentData of StudentData">
        <td>{{StudentData.name}}</td>
        <td>{{StudentData.surname}}</td>
      </tr>
    </table>
  </div>`,
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  StudentData: Array<any> = [
    {name: 'Vlad', surname: 'Atorin'},
    {name: 'Oleg', surname: 'Sivak'},
    {name: 'Alexander', surname: 'Chernenko'},
  ]

  constructor(svc: FirstServiceService) {
    svc.consoleText("Hello Student Page!");
  }
}

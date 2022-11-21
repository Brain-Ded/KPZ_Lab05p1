import { Component } from '@angular/core';
import {FirstServiceService} from "../first-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(svc: FirstServiceService) {
    svc.consoleText("Hello Home Page!");
  }
}

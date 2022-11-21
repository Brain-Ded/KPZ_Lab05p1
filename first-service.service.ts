import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  consoleText(arg?: any){
    console.log(arg);
  }

  constructor() { }
}

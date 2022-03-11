import { Component, OnInit } from '@angular/core';
import { ApiServices } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  apis: any;

  constructor(public api:ApiServices){}

  ngOnInit(){
    this.api.getApi().subscribe(
      (r) => { this.apis = r; console.log(r) },
      (e) => { console.error(e) }
    )
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  intervalSub:any
  title = 'my-angular';
  
  toggle:boolean = false

  getMin(a:any,b:any){
    return a+b; // generate random number between
  }

  constructor() {}

  toggleAdd(){
  this.toggle=!this.toggle
   }

  ngOnInit(): void {
  console.log(this.toggle)
   }
}

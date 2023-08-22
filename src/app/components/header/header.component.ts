import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy{
  head='Task Manager'
  subscription:Subscription;
  showAddTask:boolean = false

  constructor(private uiService:UiService , private router:Router){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask=value)
  }
  
  toggleAdd(){
    this.uiService.toggleAddTask()
  }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  hasRoute(route:string){
     return  this.router.url === route
  }
}

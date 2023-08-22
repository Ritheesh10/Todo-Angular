import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { Task } from '../tasks/task-type';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit{
 @Input() task:any;
 
 @Output() deleteBtn:EventEmitter<Task> = new EventEmitter()
 @Output() reminderBtn:EventEmitter<Task> = new EventEmitter()

 faTimes = faTimes;

 constructor(){}

 ngOnInit(): void {
  console.log(this.task)
 }

 onDelete(task:Task){
  this.deleteBtn.emit(task)
 }

 onReminderToggle(task:Task,e:Event){
  e.stopPropagation()
   this.reminderBtn.emit(task)
 }
}

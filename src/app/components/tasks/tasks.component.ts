import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task-type'
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})


export class TasksComponent implements OnInit{

  tasks:Task[]=[]
  constructor(private taskService:TaskService){}
  
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }
 
  onDelete(task:Task){
    this.taskService.deleteTasks(task).subscribe(()=>this.tasks = this.tasks.filter(t=>t.id !== task.id))
  }

  onReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.updateReminder(task).subscribe()
  }

  onAddTask(task:Task){
    // event.preventDefault()
    this.taskService.addTask(task).subscribe(()=>this.tasks.push(task))

  }
}

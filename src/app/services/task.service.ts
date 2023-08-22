import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../components/tasks/task-type';
import { HttpClient } from '@angular/common/http'

const httpOptions={
  headers:{
    "content-type":"application/json"
  }
}


@Injectable({
  providedIn: 'root'
})



export class TaskService {
  
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
   return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTasks(task:Task):Observable<Task>{
   return this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }

  updateReminder(task:Task):Observable<Task>{
    return this.http.put<Task>(`${this.apiUrl}/${task?.id}`,task,httpOptions )  
  }

  addTask(task:Task):Observable<Task>{
     return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }

}

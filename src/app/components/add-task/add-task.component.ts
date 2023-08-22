import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../tasks/task-type';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
 @Output() onSubmitTask:EventEmitter<Task>= new EventEmitter()

 taskForm = new FormGroup<Task | any>({
   name: new FormControl<string>(''),
   description: new FormControl<string>(''),
   reminder: new FormControl<boolean>(false)
  })
  
     showAddTask: boolean = false 
    subscription: Subscription;
  
    constructor(private uiService: UiService) {
      this.subscription = this.uiService
        .onToggle()
        .subscribe((value) => (this.showAddTask = value));
    }
  
    ngOnInit(): void {}
    
     ngOnDestroy() {
          // Unsubscribe to ensure no memory leaks
          this.subscription.unsubscribe();
      }

  
 

  onSubmit(){
    const data=  {...this.taskForm.value} as unknown as Partial<Task>
    if (this.taskForm.value.name !== "" || null) {
      this.onSubmitTask.emit(this.taskForm.value)
      this.taskForm.reset()
    } else {
      alert("Please enter a valid Name")
    }

    console.log(data)


  }

}

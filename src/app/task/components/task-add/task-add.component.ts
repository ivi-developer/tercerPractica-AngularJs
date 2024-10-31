import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Task } from '../../interface/task.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css'
})
export class TaskAddComponent {
  @Output()
  emitTask: EventEmitter<Task> = new EventEmitter()

  sendTask() {
    if (this.form.invalid) return
    const task = this.form.getRawValue()
    this.addTareaDb(task)
    this.emitTask.emit(task)
  }
  fb = inject(FormBuilder)
  form = this.fb.nonNullable.group(
    {
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['']
    }
  )
  tareaService = inject(TaskService)
  addTareaDb(task: Task) {
    this.tareaService.postTask(task).subscribe(
      {
        next: (task: Task) => alert("Tarea guardada")
        ,
        error: (error: Error) => console.log(error.message)

      }
    )
  }
}

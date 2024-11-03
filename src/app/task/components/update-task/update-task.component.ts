import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../service/task.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Task } from '../../interface/task.interface';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent implements OnInit {

  ngOnInit(): void {
    this.activatedRout.paramMap.subscribe(
      {
        next: (param) => {
          this.id = param.get('id')
          this.getTaskById(this.id)
        }
        ,
        error: (e: Error) => e.message
      }
    )
  }

  id: string | null = null

  formBuilder = inject(FormBuilder)
  taskService = inject(TaskService)

  form = this.formBuilder.nonNullable.group(
    {
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['']
    }
  )

  activatedRout = inject(ActivatedRoute)

  getTaskById(id: string | null) {
    this.taskService.getTaskById(id).subscribe(
      {
        next: (task: Task) => {
          this.form.controls['id'].setValue(task.id)
          this.form.controls['name'].setValue(task.name)
          if (task.description) this.form.controls['description'].setValue(task.description)
        },
        error: (e: Error) => console.log(e.message)

      }
    )
  }

  update() {
    if (this.form.invalid) return
    const task = this.form.getRawValue()
    this.taskService.putTask(task, this.id).subscribe(
      {
        next: (task) => this.router.navigateByUrl('tasks')
        ,
        error: (e: Error) => console.log(e.message)

      }
    )
  }
  router = inject(Router)

}

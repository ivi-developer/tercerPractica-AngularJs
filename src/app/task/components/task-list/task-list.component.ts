import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../interface/task.interface';
import { TaskAddComponent } from '../task-add/task-add.component';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskAddComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []

  addTask(task: Task) {
    this.tasks.push(task)
  }
  taskService = inject(TaskService)

  ngOnInit(): void {
    this.listTasks()
  }

  listTasks() {
    this.taskService.getTasks().subscribe(
      {
        next: (task: Task[]) => this.tasks = task
        ,
        error: (e: Error) => console.log(e.message)

      }
    )
  }
}

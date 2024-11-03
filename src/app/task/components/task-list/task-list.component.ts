import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../interface/task.interface';
import { TaskAddComponent } from '../task-add/task-add.component';
import { TaskService } from '../../service/task.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskAddComponent, RouterModule],
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

  deleteTask(id: string) {
    console.log(id);

    this.taskService.deleteTask(id).subscribe(
      {
        next: () => console.log("Tarea eliminada")
        ,
        error: (e: Error) => console.log(e.message)
      }
    )
  }

}

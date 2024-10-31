import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interface/task.interface';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  urlBase: string = 'http://localhost:3000/tareas'
  http = inject(HttpClient)

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.urlBase)
  }
  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.urlBase}/${id}`)
  }
  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.urlBase, task)
  }
  putTask(task: Task, id: number): Observable<Task> {
    return this.http.put<Task>(`${this.urlBase}/${id}`, task)
  }
  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.urlBase}/${id}`)
  }
}

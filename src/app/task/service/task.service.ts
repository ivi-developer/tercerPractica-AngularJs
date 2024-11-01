import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interface/task.interface';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
  urlBase=environment.urlBase
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
  deleteTask(id: number|undefined): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { TasksComponent } from '../components/tasks/tasks.component';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // private apiUrl = 'http://localhost:5000/tasks';
  private apiUrl = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}

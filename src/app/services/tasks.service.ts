import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../state/model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<Task>> {
    return this.http
      .get<Task[]>(
        'http://localhost:3000/api/tasks'
      )
      .pipe(map((tasks) => tasks || []));
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:3000/api/tasks',task)
      .pipe(map((task) => task));
  }
}

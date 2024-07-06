import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskEntity } from '../state/model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<TaskEntity>> {
    return this.http
      .get<TaskEntity[]>(
        'http://localhost:3000/api/tasks'
      )
      .pipe(map((tasks) => tasks || []));
  }

  addTask(task: TaskEntity): Observable<TaskEntity> {
    return this.http.post<TaskEntity>('http://localhost:3000/api/tasks',task)
      .pipe(map((task) => task));
  }
}

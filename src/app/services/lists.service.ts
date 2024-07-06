import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListEntity, TaskEntity } from '../state/model';

@Injectable({ providedIn: 'root' })
export class ListsService {
  constructor(private http: HttpClient) {}

  getLists(): Observable<Array<ListEntity>> {
    return this.http
      .get<ListEntity[]>(
        'http://localhost:3000/api/lists'
      )
      .pipe(map((lists) => lists || []));
  }

  addList(list: ListEntity): Observable<ListEntity> {
    return this.http.post<ListEntity>('http://localhost:3000/api/lists',list)
      .pipe(map((list) => list));
  }
}

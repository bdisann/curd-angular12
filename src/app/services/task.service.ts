import { Injectable } from '@angular/core';
import DATA_INTERFACE from '../data/dataInterface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  private httpOptions: Object = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getTasksData(): Observable<DATA_INTERFACE[]> {
    return this.http.get<DATA_INTERFACE[]>(this.apiUrl);
  }

  deleteTaskData(task: DATA_INTERFACE): Observable<DATA_INTERFACE> {
    const deleteUrl: string = `${this.apiUrl}/${task.id}`;
    return this.http.delete<DATA_INTERFACE>(deleteUrl);
  }

  editReminderTaskData(task: DATA_INTERFACE): Observable<DATA_INTERFACE> {
    const editUrl: string = `${this.apiUrl}/${task.id}`;
    return this.http.put<DATA_INTERFACE>(editUrl, task, this.httpOptions);
  }

  addTaskData(task: DATA_INTERFACE): Observable<DATA_INTERFACE> {
    return this.http.post<DATA_INTERFACE>(this.apiUrl, task, this.httpOptions);
  }
}

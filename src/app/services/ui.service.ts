import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddForm: boolean = false;
  private subject: any = new Subject();

  constructor() {}

  toogleAddForm() {
    this.showAddForm = !this.showAddForm;
    this.subject.next(this.showAddForm);
  }

  onToogle(): Observable<any> {
    return this.subject.asObservable();
  }
}

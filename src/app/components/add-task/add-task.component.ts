import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import DATA_INTERFACE from 'src/app/data/dataInterface';
import { v4 as uuid } from 'uuid';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  showAddForm: boolean;
  subscription: Subscription;
  @Output() onSubmitTask: EventEmitter<DATA_INTERFACE> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;

  constructor(private ui: UiService) {
    this.subscription = this.ui
      .onToogle()
      .subscribe((e) => (this.showAddForm = e));
  }

  ngOnInit(): void {}

  handleSubmit(): void {
    if (!this.text && !this.day) {
      window.alert('Isi form dengan benar');
      return;
    }
    const newTodo: DATA_INTERFACE = {
      id: uuid(),
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onSubmitTask.emit(newTodo);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

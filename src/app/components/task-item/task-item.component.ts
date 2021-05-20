import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import DATA_INTERFACE from 'src/app/data/dataInterface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: DATA_INTERFACE;
  @Output() onDeleteTask: EventEmitter<DATA_INTERFACE> = new EventEmitter();
  @Output() onToogleReminderTask: EventEmitter<DATA_INTERFACE> =
    new EventEmitter();
  faTimes = faTimes;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  handleDelete(task: DATA_INTERFACE) {
    this.onDeleteTask.emit(task);
  }

  onToogleReminder(task: DATA_INTERFACE) {
    this.onToogleReminderTask.emit(task);
  }
}

import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import DATA_INTERFACE from '../../data/dataInterface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: DATA_INTERFACE[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasksData().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  handleDeleteTask(task: DATA_INTERFACE) {
    const confirm = window.confirm('Yakin ingin menghapus data ini?');
    if (confirm) {
      this.taskService
        .deleteTaskData(task)
        .subscribe(
          () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
        );
    } else {
      return;
    }
  }

  handleToogleReminder(task: DATA_INTERFACE) {
    const confirm = window.confirm(
      `Yakin ingin mengubah reminder data ini menjadi ${
        task.reminder ? 'TIDAK AKTIF' : 'AKTIF'
      }?`
    );

    if (confirm) {
      task.reminder = !task.reminder;
      this.taskService.editReminderTaskData(task).subscribe();
    } else {
      return;
    }
  }

  handleAddTask(newTodo: DATA_INTERFACE) {
    this.taskService
      .addTaskData(newTodo)
      .subscribe((task) => this.tasks.push(task));
  }
}

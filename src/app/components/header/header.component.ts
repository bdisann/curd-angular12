import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showAddForm: boolean;
  subscription: Subscription;
  constructor(private ui: UiService, private router: Router) {
    this.subscription = this.ui
      .onToogle()
      .subscribe((e) => (this.showAddForm = e));
  }

  title: string = 'To-Task A-12';

  ngOnInit(): void {}

  toogleTodoAdd() {
    this.ui.toogleAddForm();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}

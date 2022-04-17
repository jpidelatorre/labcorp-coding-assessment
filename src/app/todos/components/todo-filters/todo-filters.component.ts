import { Component, OnDestroy } from '@angular/core';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';
import { TodosService } from '@app/todos/services/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnDestroy {
  modes: string[] = Object.keys(FILTER_MODES);
  selected = this.modes[0];
  subscription: Subscription;

  constructor(
    public service: TodosService,
  ) {
    this.subscription = service.filterMode$.subscribe(mode => this.selected = mode);
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
}

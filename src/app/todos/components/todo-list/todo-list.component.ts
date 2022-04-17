import { combineLatest, map, Observable } from 'rxjs';
import { Component } from '@angular/core';

import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';
import { FILTER_MODES } from '@app/todos/constants/filter-modes';

@Component({
  selector: 'app-todos-list',
  styleUrls: [
    './todo-list.component.scss',
  ],
  templateUrl: './todo-list.component.html',
})
export class TodosListComponent {
  todos: Observable<ITodo[]>;

  constructor (
    public service: TodosService,
  ) {
    this.todos = combineLatest([
      this.service.allTodos$,
      this.service.filterMode$,
    ]).pipe(
      map(([todos, filter]) =>
        filter === FILTER_MODES.All ?
          todos :
          todos.filter(todo =>
            todo.completed === (filter === FILTER_MODES.Completed)
          )
      )
    );
  }

  remove (index: number) {
    this.service.removeTodo(index);
  }

  toggle (index: number) {
    this.service.toggleComplete(index);
  }
}

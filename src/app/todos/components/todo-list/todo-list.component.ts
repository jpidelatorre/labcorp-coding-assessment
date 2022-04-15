import { Component } from '@angular/core';
import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';
import { Observable, tap } from 'rxjs';

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
    this.todos = this.service.allTodos$;
  }

  remove (index: number) {
    this.service.removeTodo(index);
  }

  toggle (index: number) {
    this.service.toggleComplete(index);
  }
}

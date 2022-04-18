import { Component } from '@angular/core';
import { TodosService } from '@app/todos/services/todos.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-todo-count',
  templateUrl: './todo-count.component.html',
  styleUrls: ['./todo-count.component.scss']
})
export class TodoCountComponent {
  count$: Observable<number>

  constructor(
    service: TodosService,
  ) {
    this.count$ = service.allTodos$.pipe(
      map(
        todos => todos
          .filter(({ completed }) => !completed)
          .length
      ),
    );
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodosService } from './todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  populated$: Observable<boolean>

  constructor (
    private todosService: TodosService,
  ) {
    this.populated$ = todosService.allTodos$.pipe(
      map(todos => todos.length > 0),
    );
  }

  addTodo (input: string) {
    this.todosService.addTodo(input);
  }

  clearDone () {
    this.todosService.clearCompleted();
  }
}

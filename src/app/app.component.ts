import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosService } from './todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  constructor (
    private todosService: TodosService,
  ) {}

  addTodo (input: string) {
    this.todosService.addTodo(input);
  }

  clearDone () {
    this.todosService.clearCompleted();
  }
}

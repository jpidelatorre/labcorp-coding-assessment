import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodosService } from './todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor (
    private todosService: TodosService,
  ) {}

  addTodo (input: HTMLInputElement) {
    if (input.value) {
      this.todosService.addTodo(input.value);
      input.value = '';
    }
  }

}

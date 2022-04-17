import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodosService } from '@app/todos/services/todos.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-complete-all',
  styleUrls: [
    './complete-all.component.scss',
  ],
  template: '&#x276f;',
})
export class CompleteAllComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  @HostBinding('class.visible') visible = false;
  @HostBinding('class.allCompleted') allCompleted = false;

  @HostBinding() title = 'Mark all as complete';

  @HostListener('click')
  toggleCompleteAll(): void {
    this.todosService.toggleAllCompleted();
  }

  constructor (
    private todosService: TodosService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.todosService.allTodos$.subscribe(todos => {
      if (todos && todos.length) {
        this.visible = true;
        this.allCompleted = todos.every(({ completed }) => completed);
      } else {
        this.visible = this.allCompleted = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

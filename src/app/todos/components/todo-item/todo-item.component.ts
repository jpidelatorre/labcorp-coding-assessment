import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ITodo } from '@app/todos/interfaces';
import { TodosService } from '@app/todos/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Output() onToggle: EventEmitter<void> = new EventEmitter
  @Output() onDelete: EventEmitter<void> = new EventEmitter

  @Input() index: number;
  @Input()
  set item (value: ITodo) {
    this.completed = value.completed;
    this.text = value.text;
  }

  @ViewChild('Input') input: ElementRef<HTMLInputElement>;
  @HostBinding('class.completed') completed = false;
  @HostBinding('class.editable') editable = false;
  text: string;
  clickCount = 0;

  @HostListener('keyup.enter') enter () {
    this.update();
  }

  @HostListener('keyup.escape') escape () {
    this.cancel();
  }

  constructor(
    private service: TodosService,
  ) { }

  toggle () {
    this.onToggle.emit();
  }

  edit () {
    this.editable = true;
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }

  update () {
    this.service.updateTodo(this.index, this.input.nativeElement.value);
  }
  
  cancel () {
    this.editable = false;
  }
}

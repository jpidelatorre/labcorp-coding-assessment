import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
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

  @Input()
  get item (): ITodo { return this._item; }
  set item (value: ITodo) {
    this.completed = value.completed;
    this._item = value;
  }

  @HostBinding('class.completed') completed = false;

  @HostListener('click') click () {
    this.onToggle.emit();
  }

  @HostListener('dblclick') dblclick () {
    // TODO: edit
  }

  private _item!: ITodo;

  constructor() { }

}

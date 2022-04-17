import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { TodosService } from './services/todos.service';
import { todosReducer } from './state/todos.reducer';

import { CompleteAllComponent } from './components/complete-all/complete-all.component';
import { TodosListComponent } from './components/todo-list/todo-list.component';
import { ItemInputComponent } from './components/item-input/item-input.component';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoCountComponent } from './components/todo-count/todo-count.component';

const DECLARATIONS = [
  CompleteAllComponent,
  TodosListComponent,
  TodoItemComponent,
  ItemInputComponent,
  TodoFiltersComponent,
  TodoCountComponent,
];

@NgModule({
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', todosReducer),
    StoreModule.forFeature('filterMode', todosReducer),
  ],
  providers: [
    TodosService,
  ],
})
export class TodosModule {}

import { Action, createReducer, on } from '@ngrx/store';
import * as TodoActions from './todo.actions';

import { FILTER_MODES } from './../constants/filter-modes';
import { ITodo } from '../interfaces/ITodo';

export interface ITodosState {
  filterMode: FILTER_MODES;
  todos?: ITodo[];
}

export const initialState: ITodosState = {
  filterMode: FILTER_MODES.All,
  todos: [],
};

export function todosReducer(state: ITodosState, action: Action) {
  return createReducer(
    initialState,
    on(TodoActions.addTodo, (existingState, { text }) => ({
      ...existingState,
      todos: [{ text, completed: false }, ...existingState.todos],
    })),
    on(TodoActions.changeFilterMode, (existingState, { mode }) => ({
      ...existingState,
      filterMode: mode,
    })),
    on(TodoActions.clearCompleted, (existingState) => ({
      ...existingState,
      todos: existingState.todos.filter(todo => !todo.completed),
    })),
    // TODO: editTodo
    on(TodoActions.removeTodo, (existingState, { index }) => {
      const todos = [...existingState.todos];
      todos.splice(index, 1);
      return { ...existingState, todos };
    }),
    on(TodoActions.toggleCompleted, (existingState, { index }) => {
      const todos = [...existingState.todos];
      todos[index] = { ...todos[index], completed: !todos[index].completed };
      return { ...existingState, todos };
    }),
    on(TodoActions.toggleAllCompleted, (existingState) => {
      const todos = existingState.todos;
      const allCompleted = todos.every(({ completed }) => completed);
      return { ...existingState, todos: todos.map(todo => ({ ...todo, completed: !allCompleted })) };
    }),
    on(TodoActions.updateTodo, (existingState, { index, text }) => {
      const todos = [...existingState.todos];
      todos[index] = { ...todos[index], text };
      return { ...existingState, todos };
    }),
  )(state, action);
}

export const todos = (state: ITodosState) => state.todos;
export const filterMode = (state: ITodosState) => (state && state.filterMode);

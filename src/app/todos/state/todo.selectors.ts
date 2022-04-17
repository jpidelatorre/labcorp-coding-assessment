import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as todosState from './todos.reducer';

export const todosSelector = createFeatureSelector<todosState.ITodosState>('todos');
export const allTodos = createSelector(
  todosSelector,
  todosState.todos,
  );

export const filterSelector = createFeatureSelector<todosState.ITodosState>('filterMode');
export const filterMode = createSelector(
  filterSelector,
  todosState.filterMode,
);
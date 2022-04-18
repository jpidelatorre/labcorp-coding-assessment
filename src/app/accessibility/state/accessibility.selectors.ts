import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAccessibilityState } from '../types/accessibility.interface';
import { switches } from './accessibility.reducer';

export const accessibilitySelector = createFeatureSelector<IAccessibilityState>('accessibility');
export const allTodos = createSelector(
  accessibilitySelector,
  switches,
);

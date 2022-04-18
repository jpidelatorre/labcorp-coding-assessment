import { Action, createReducer, on } from '@ngrx/store';
import { IAccessibilityState } from '../types/accessibility.interface';
import * as Actions from './accessibility.actions';

export const initialState: IAccessibilityState = {
  DarkMode: false,
  EnhancedContrast: false,
  ReducedAnimation: false,
  EnhancedReadability: false,
};

export function accessibilityReducer(state: IAccessibilityState, action: Action) {
  return createReducer(
    initialState,
    on(Actions.darkMode, (existingState, { value }) => ({ ...existingState, DarkMode: value })),
    on(Actions.toggle, (existingState, { setting, value }) => ({ ...existingState, [setting]: value })),
  )(state, action);
}

export const switches = (state: object) => state;

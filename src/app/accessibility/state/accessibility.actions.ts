import { createAction, props } from '@ngrx/store';
import { IAccessibilityState } from '../types/accessibility.interface';

export const darkMode = createAction('[Accessibility] Toggle dark mode', props<{ value: boolean }>());
export const toggle = createAction('[Accessibility] Toggle any switch', props<{ setting: keyof IAccessibilityState, value: boolean }>());

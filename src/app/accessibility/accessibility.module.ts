import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { accessibilityReducer } from './state/accessibility.reducer';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { WindowService } from './services/browser.service';

const DECLARATIONS = [
  DarkModeComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('accessibility', accessibilityReducer),
  ],
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  providers: [
    WindowService,
  ],
})
export class AccessibilityModule { }

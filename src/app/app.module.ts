import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@app/environments/environment';
import { TodosModule } from './todos/todos.module';
import { AccessibilityModule } from './accessibility/accessibility.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot([], {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,
    }) : [],
    TodosModule,
    AccessibilityModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

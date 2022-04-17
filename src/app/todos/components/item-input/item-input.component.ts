import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.scss']
})
export class ItemInputComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter;
  @Input() placeholder: string;

  constructor() { }
  
  enter (input: HTMLInputElement) {
    if (input.value) {
      this.submit.emit(input.value);
      input.value = '';
    }
  }
}

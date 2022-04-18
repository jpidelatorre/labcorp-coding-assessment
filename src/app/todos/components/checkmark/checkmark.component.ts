import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-checkmark',
  templateUrl: './checkmark.component.html',
  styleUrls: ['./checkmark.component.scss']
})
export class CheckmarkComponent {
  private _checked: true | null = null;

  @HostBinding('attr.checked')
  @Input()
  get checked (): true | null { return this._checked; }
  set checked (value: boolean) { this._checked = value || null; }
}

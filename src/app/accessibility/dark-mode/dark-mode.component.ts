import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { WindowService } from '../services/browser.service';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent {
  private darkMode: boolean;

  @HostBinding('class.sun') get sun (): boolean { return !this.darkMode; }
  @HostBinding('class.moon') get moon (): boolean { return this.darkMode; }

  @HostListener('click')
  click () {
    this.darkMode = !this.darkMode;
    this.window.toggleClass('dark');
  }
  
  constructor (
    private window: WindowService,
  ) {}
}

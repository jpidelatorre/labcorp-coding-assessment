import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class WindowService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  addClass (className: string) {
    this.document.documentElement.classList.add(className);
  }

  removeClass (className: string) {
    this.document.documentElement.classList.remove(className);
  }

  toggleClass (className: string) {
    this.document.documentElement.classList.toggle(className);
  }

  replaceClass (className: string, replacement: string) {
    this.document.documentElement.classList.replace(className, replacement);
  }
}

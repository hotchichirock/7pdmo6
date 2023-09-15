import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// describle component
@Component({
  selector: 'add-one-button', // component name used in markup
  standalone: true, // component is self-contained
  template: `
   <button (click)="count = count + 1"> Add one</button> {{ count }}
   <button (click)="count = 0">Rest</button>
  `, //the component's markup
})

// export component
export class AddOneButtonComponent {
  count = 0;
}

bootstrapApplication(AddOneButtonComponent);

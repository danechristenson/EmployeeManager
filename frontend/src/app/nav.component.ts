import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar color="primary">
    <h1>{{title}}</h1>
      <button mat-button routerLink="/">Employee List</button>
    </mat-toolbar>
    `,
})
export class NavComponent {
  title = 'Employee Manager';
  constructor() {
  }
}

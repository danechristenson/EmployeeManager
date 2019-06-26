import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <employees></employees>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Manager';
}

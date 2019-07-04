import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeListComponent } from './employeeList.component';

@Component({
  template: `
    <h1 mat-dialog-title>Delete</h1>
    <div mat-dialog-content>
      <mat-card>
        Are you sure you want to delete employee #: {{data.id}}, {{ data.firstName }} {{ data.lastName }}
      </mat-card>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button class="danger" [mat-dialog-close]="data.delete">Delete</button>
    </div>
  `
})
export class EmployeeDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<EmployeeListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

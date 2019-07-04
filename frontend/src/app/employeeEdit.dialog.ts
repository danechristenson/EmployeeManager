import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeListComponent } from './employeeList.component';
import { FormBuilder, Validators } from '@angular/forms';
import { WebService } from './web.service';

@Component({
  templateUrl: 'employeeEdit.dialog.html'
  // `
  //   <h1 mat-dialog-title>Delete</h1>
  //   <div mat-dialog-content>
  //     <mat-card>
  //       Are you sure you want to delete employee #: {{data.id}}, {{ data.firstName }} {{ data.lastName }}
  //     </mat-card>
  //   </div>
  //   <div mat-dialog-actions>
  //     <button mat-button (click)="onNoClick()">No Thanks</button>
  //     <button mat-button class="danger" [mat-dialog-close]="data.delete">Delete</button>
  //   </div>
  // `
})
export class EmployeeEditDialog {
  form:any;
  constructor(
    public dialogRef: MatDialogRef<EmployeeListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private webService :WebService){
      console.log(data);
      this.form = formBuilder.group({
        ID: [],
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Gender: ['', Validators.required],
        Address: ['', Validators.required],
        City: ['', Validators.required],
        Postal: ['', Validators.required],
        Phone: ['', Validators.required],
        CreatedDate: [new Date()],
        StartTime: [],
        EndTime: [],
        ManagerID: []
      });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    this.webService.postEmployee(this.form.value);
  }

  isValid(control:string){
    return this.form.controls[control].invalid
  }
}


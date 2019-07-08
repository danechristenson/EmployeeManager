import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeListComponent } from './employeeList.component';
import { FormBuilder, Validators } from '@angular/forms';
import { WebService } from './web.service';

@Component({
  templateUrl: 'employeeTimesheet.dialog.html'
})
export class EmployeeTimesheetDialog {
  form: any;
  clockDate: Date = new Date();
  name: string;
  constructor(
    public dialogRef: MatDialogRef<EmployeeListComponent>,
    private formBuilder: FormBuilder,
    private webService :WebService,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.form = formBuilder.group({
        Id: [data.id],
        ClockDate: ['',Validators.required],
        StartTime: ['', Validators.required],
        EndTime: ['', Validators.required]
      });
      this.name= data.firstName + " " + data.lastName;
      console.log(this.name)
      console.log(data.firstName)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    console.log(this.form.value);
    // this.webService.postClockIn(this.form.value);
  }

  isValid(control:string){
    return this.form.controls[control].invalid
  }
}

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeListComponent, employee } from './employeeList.component';
import { FormBuilder, Validators } from '@angular/forms';
import { WebService } from './web.service';

@Component({
  templateUrl: 'employeeTimesheet.dialog.html'
})
export class EmployeeTimesheetDialog {
  timeSheetForm: any;
  clockDate: Date = new Date();
  name: string;
  employee:any;
  constructor(
    public dialogRef: MatDialogRef<EmployeeListComponent>,
    private formBuilder: FormBuilder,
    private webService :WebService,
    @Inject(MAT_DIALOG_DATA) public data: any){
      this.timeSheetForm = formBuilder.group({
        EmployeeId: [data.id],
        ClockDate: [''],
        StartTime: [''],
        EndTime: ['']
      });
      this.name= data.firstName + " " + data.lastName;
      console.log(data.id);
      this.employee = webService.employees.forEach(item => {
        console.log(item);
        // if (item.id = data.id){
        //   return item;
        // }
      });
      console.log(this.employee);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log(this.timeSheetForm.value);
    this.dialogRef.close();
    this.webService.postClockIn(this.timeSheetForm.value);
  }

}

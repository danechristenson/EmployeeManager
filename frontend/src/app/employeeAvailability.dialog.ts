import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeListComponent } from './employeeList.component';
import { FormBuilder } from '@angular/forms';
import { WebService } from './web.service';

@Component({
  templateUrl: 'employeeAvailability.dialog.html'
})
export class EmployeeAvailabilityDialog {
  availabilityForm: any;
  clockDate: Date = new Date();
  name: string;
  employee:any;
  constructor(
    public dialogRef: MatDialogRef<EmployeeListComponent>,
    private formBuilder: FormBuilder,
    private webService :WebService){
      this.availabilityForm = formBuilder.group({
        ClockDate: [''],
        StartTime: [''],
        EndTime: ['']
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close();
    // this.webService.postClockIn(this.timeSheetForm.value);
  }

}
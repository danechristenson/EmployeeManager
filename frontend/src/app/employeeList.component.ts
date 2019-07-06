import { Component } from '@angular/core';
import { WebService } from './web.service';
import { MatDialog } from '@angular/material';
import { EmployeeAddComponent } from './employeeAdd.component';
import { EmployeeDeleteComponent } from './employeeDelete.component';
import { EmployeeEditDialog } from './employeeEdit.dialog';

export interface employee {
  Id: number;
  FirstName: string;
  LastName:string;
  Contact: string;
  CreatedDate: string;
  Manager: string;
  StartTime: string;
  EndTime: string;
}

@Component({
  selector: "employees",
  templateUrl: 'employeeList.component.html'
})
export class EmployeeListComponent {
  constructor(private webService: WebService, public dialog: MatDialog){}
  displayedColumns: string[] = ["id", "firstName", "lastName", "contact", "createdDate", "manager", "startTime", "endTime"];
  employees = this.webService.employees;

  editEmployee(employee: employee){
    console.log('edit clicked');
    console.log(employee);
    const dialogRef = this.dialog.open(EmployeeEditDialog, {
      width: '650px',
      data: {employee: employee}
    });
  }

  deleteEmployee(id:number, firstName:string, lastName:string){
    const dialogRef = this.dialog.open(EmployeeDeleteComponent, {
      width: '650px',
      data: {id: id, firstName: firstName, lastName: lastName, delete: 'delete'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == 'delete'){
        this.webService.deleteEmployee(id);
      }
    })
  }

  addEmployee(){
    const dialogRef = this.dialog.open(EmployeeAddComponent, {
      width: '680px',
    });
  }


}
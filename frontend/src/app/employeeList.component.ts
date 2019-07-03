import { Component } from '@angular/core';
import { WebService } from './web.service';

export interface employee {
  id: number;
  firstName: string;
  lastName:string;
  contact: string;
  createdDate: string; // TODO: change to a proper date
  manager: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: "employees",
  templateUrl: 'employeeList.component.html'
})
export class EmployeeListComponent {
  constructor(private webService: WebService){}
  displayedColumns: string[] = ["id", "firstName", "lastName", "contact", "createdDate", "manager", "startTime", "endTime"];
  employees = this.webService.employees;

  editEmployee(id:number){
    console.log(`edit called on id: ${id} `);
  }
  deleteEmployee(id:number){
    // TODO: add confirmation box
    this.webService.deleteEmployee(id);
  }

  addEmployee(){
    console.log(`add called`);
  }


}
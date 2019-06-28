import { Component } from '@angular/core';

export interface employee {
  id: number;
  name: string;
  contact: string;
  createdDate: string; // TODO: change to a proper date
  manager: string;
  startTime: string;
  endTime: string;
}

const DATA: employee[] = [
  {id: 0, name: "jim", contact: "1234 anywhere Canada", createdDate: "04/04/2019", manager: "tim", startTime: "8:00 am", endTime: "3:33pm"},
  {id: 1, name: "time", contact: "5678 anywhere Canada", createdDate: "04/03/2019", manager: "jim", startTime: "9:00 am", endTime: "4:33pm"}
]

@Component({
  selector: "employees",
  templateUrl: 'employeeList.component.html'
})
export class EmployeeListComponent {
  displayedColumns: string[] = ["id", "name", "contact", "createdDate", "manager", "startTime", "endTime"];
  employees = DATA;

  editEmployee(id:number){
    console.log(`edit called on id: ${id} `);
  }
  deleteEmployee(id:number){
    console.log(`delete called on id: ${id} `);
  }

  addEmployee(){
    console.log(`add called`);
  }


}
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
  template: `
    <button mat-icon-button color="primary" matToolTip="Add new employee">
      <mat-icon (click)="addEmployee()" aria-label="add employee">add</mat-icon>
    </button>
    <table mat-table matSort [dataSource]="employees" class="mat-elevation-z8">
    <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>
        <td mat-cell *matCellDef="let element">
          <button mat-icon-button color="primary" matTooltip="edit a employee">
            <mat-icon (click)="editEmployee(element.id)" aria-label="edit employee">edit</mat-icon>
          </button>
          <button mat-icon-button color="warn" matTooltip="delete a employee">
            <mat-icon (click)="deleteEmployee(element.id)" aria-label="delete employee">delete</mat-icon>
          </button>
        </td>
      </ng-container>
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>
      <ng-container matColumnDef="contact">
        <th mat-header-cell *matHeaderCellDef> Contact </th>
        <td mat-cell *matCellDef="let element"> {{element.contact}} </td>
      </ng-container>
      <ng-container matColumnDef="createdDate">
        <th mat-header-cell *matHeaderCellDef> Record Created </th>
        <td mat-cell *matCellDef="let element"> {{element.createdDate}} </td>
      </ng-container>
      <ng-container matColumnDef="manager">
        <th mat-header-cell *matHeaderCellDef> Manager </th>
        <td mat-cell *matCellDef="let element"> {{element.manager}} </td>
      </ng-container>
      <ng-container matColumnDef="startTime">
        <th mat-header-cell *matHeaderCellDef> Start Time </th>
        <td mat-cell *matCellDef="let element"> {{element.startTime}} </td>
      </ng-container>
      <ng-container matColumnDef="endTime">
        <th mat-header-cell *matHeaderCellDef> End Time </th>
        <td mat-cell *matCellDef="let element"> {{element.endTime}} </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
    <mat-paginator [length] = "100"
      [pageSize]= "10"
      [pageSizeOptions] = "[5, 10, 25, 100]">
    </mat-paginator>
    `
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
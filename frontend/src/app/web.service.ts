import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {
  BASE_URL:string = 'https://localhost:8080/';

  private employeeStore:any = [];
  private employeeSymbol = new Subject();

  employees = this.employeeSymbol.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.getEmployees('');
  }

  getEmployees(employeeId:string) {
    employeeId = (employeeId) ? '/' + employeeId : '';
    this.http.get(this.BASE_URL+'employees' + employeeId).subscribe(response => {
      this.employeeStore = response;
      this.employeeSymbol.next(this.employeeStore);
    }, error => {
      this.handleError("Unable to get employee.");
    });
  }

  async postEmployee(employee:any) {
    try {
      let response = await this.http.post(this.BASE_URL + 'employees', employee).toPromise();
      this.employeeStore.push(response);
      this.employeeSymbol.next(this.employeeStore);
    } catch (error) {
      this.handleError("Unable to add employee.");
    }
  }

  private handleError(error:string) {
    this.snackBar.open(error, 'close', {duration: 2000});
  }
}
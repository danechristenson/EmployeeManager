import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {
  
  BASE_URL:string = 'http://localhost:8080/api/';

  private employeeStore:any = [];
  private employeeSymbol = new Subject();

  employees = this.employeeSymbol.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.getEmployees();
  }

  getEmployees() {
    this.http.get(this.BASE_URL+'Employees').subscribe(response => {
      console.log(response);
      this.employeeStore = response;
      this.employeeSymbol.next(this.employeeStore);
    }, error => {
      this.handleError("Unable to get employee.");
    });
  }

  getEmployee(employeeId: string){
    employeeId = (employeeId) ? '/' + employeeId : '';
    this.http.get(this.BASE_URL+'Employees/' +employeeId).subscribe(response => {
      this.employeeStore = response;
      this.employeeSymbol.next(this.employeeStore);
    }, error => {
      this.handleError("Unable to get employee.");
    });
  }

  async postEmployee(employee:any) {
    try {
      let response = await this.http.post(this.BASE_URL + 'Employees', employee).toPromise();
      this.employeeStore.push(response);
      this.employeeSymbol.next(this.employeeStore);
    } catch (error) {
      this.handleError("Unable to delete employee.");
    }
  }
  
  async putEmployee(id: any, employee: any) {
    try {
      let response = await this.http.put(this.BASE_URL + 'Employees/' + id, employee).toPromise();
      this.employeeStore.push(response);
      this.employeeSymbol.next(this.employeeStore);
    } catch (error) {
      this.handleError("Unable to delete employee.");
    }
  }
  
  deleteEmployee(id: number) {
    this.http.delete(this.BASE_URL+'Employees/' + id).subscribe(response => {
      this.employeeStore = response;
      this.employeeSymbol.next(this.employeeStore);
    }, error => {
      this.handleError("Unable to delete employee.");
    });
  }

  private handleError(error:string) {
    this.snackBar.open(error, 'close', {duration: 2000});
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {
  BASE_URL:string = 'https://localhost:44308/api/';

  private messageStore:any = [];
  private messageSubject = new Subject();

  messages = this.messageSubject.asObservable();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.getMessages('');
  }

  getMessages(employeeId:string) {
    employeeId = (employeeId) ? '/' + employeeId : '';
    this.http.get(this.BASE_URL+'messages' + employeeId).subscribe(response => {
      this.messageStore = response;
      this.messageSubject.next(this.messageStore);
    }, error => {
      this.handleError("Unable to get messages.");
    });
  }

  async postEmployee(message:any) {
    try {
      let response = await this.http.post(this.BASE_URL + 'messages', message).toPromise();
      this.messageStore.push(response);
      this.messageSubject.next(this.messageStore);
    } catch (error) {
      this.handleError("Unable to add employee.");
    }
  }

  private handleError(error:string) {
    this.snackBar.open(error, 'close', {duration: 2000});
  }
}
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { WebService } from './web.service';
import { employee } from './employeeList.component';

@Component({
  selector: "employee",
  templateUrl: 'employeeAdd.component.html',
  styles: [`
    .error {
      color: red;
    }
  `]
})
export class EmployeeAddComponent {
  form:any;
  managers:any = this.webService.employees;
  constructor(private formBuilder: FormBuilder, private webService :WebService) {
    this.form = formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Gender: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      Postal: ['', Validators.required],
      Phone: ['', Validators.required],
      CreatedDate: [new Date()],
      StartTime: [],
      EndTime: [],
      ManagerID: []
    });
    console.log(this.managers);
  }

  onSubmit(){
    this.webService.postEmployee(this.form.value);
  }

  isValid(control:string){
    return this.form.controls[control].invalid
  }
}

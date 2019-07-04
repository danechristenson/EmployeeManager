import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { WebService } from './web.service';

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
  }

  onSubmit(){
    this.webService.postEmployee(this.form.value);
  }

  isValid(control:string){
    return this.form.controls[control].invalid
  }
}

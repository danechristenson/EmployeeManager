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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postal: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit(){
    this.webService.postEmployee(this.form.value);
  }

  isValid(control:string){
    return this.form.controls[control].invalid
  }
}

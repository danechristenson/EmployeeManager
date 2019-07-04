import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatInputModule, MatCardModule, MatToolbarModule, MatDialogModule, MatRadioModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employeeList.component';
import { HttpClientModule } from '@angular/common/http';
import { WebService } from './web.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employeeAdd.component';
import { NavComponent } from './nav.component';
import { EmployeeDeleteComponent } from './employeeDelete.component';
import { EmployeeEditDialog } from './employeeEdit.dialog';

let routes = [
  {
    path: '',
    component: EmployeeListComponent
  },
  {
    path: 'addEmployee',
    component: EmployeeAddComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeDeleteComponent,
    EmployeeEditDialog,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  entryComponents: [EmployeeDeleteComponent, EmployeeEditDialog],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }

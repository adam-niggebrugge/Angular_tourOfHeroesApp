// basic imports Angular starts with
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports through tutorial directions for
import { FormsModule } from '@angular/forms';
//these were created through the ng generate component  <something> command
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'; // NgModel lives here
import { EmployeesComponent } from './employees/employees.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    MessagesComponent
  ],
  imports: [
    //basic angular imports that will occur with 
    BrowserModule,
    AppRoutingModule,
    // tutorial guided imports
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

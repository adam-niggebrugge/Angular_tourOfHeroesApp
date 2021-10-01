// basic imports Angular starts with
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';

// Imports through tutorial directions for
import { FormsModule } from '@angular/forms'; // NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
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

// basic imports Angular starts with
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Imports through tutorial directions for
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//For the mock data connection through Http, 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//these were created through the ng generate component  <something> command
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'; // NgModel lives here
import { EmployeesComponent } from './employees/employees.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeAdderComponent } from './employee-adder/employee-adder.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    EmployeeAdderComponent,
    HeroSearchComponent
  ],
  imports: [
    //basic angular imports that will occur with scaffolding set up of ng generate 
    BrowserModule,
    AppRoutingModule,
    // tutorial guided imports
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

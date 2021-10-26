import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  //typical Angular route made of two components
  { 
    path: 'employees', //a string to match the URL
    component: EmployeesComponent //what to display when a URL like localhost:4200/employees is given
  }, 
  { 
     path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'  //redirects to dashboard when the full empty path is matched
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //method forRoot() since configured at app root level will make this deployable for any service provider and base URL given
  exports: [RouterModule] //enables the RouterModule to be available throughout the app
})
export class AppRoutingModule { }

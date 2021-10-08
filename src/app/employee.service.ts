import { Injectable } from '@angular/core';
//Link to mock data and object defintiion
import { Employee } from  './employee';
import { EMPLOYEES } from './mock-employees';
// key class of RxJS Library https://rxjs.dev/
import { Observable, of } from 'rxjs';

//Provided from ng generate, which will now allow angular to inject this script as needed
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees(): Observable<Employee[]> {
    const employee = of(EMPLOYEES);
    return employee;
  }

  constructor() { }
}

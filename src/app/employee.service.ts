import { Injectable } from '@angular/core';

// key class of RxJS Library https://rxjs.dev/
import { Observable, of } from 'rxjs';

//Link to mock data and object defintiion
import { Employee } from  './employee';
import { EMPLOYEES } from './mock-employees';
import { MessageService } from './message.service';


//Provided from ng generate, which will now allow angular to inject this script as needed
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private messageService: MessageService) { }
  
  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEES);
    this.messageService.add('EmployeeService: fetched employees');
    return employees;
  }

  getEmployee(id: number): Observable<Employee> {
  // For now, assume that an employee with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
  const employee = EMPLOYEES.find(e => e.id === id)!;
  this.messageService.add(`EmployeeService: fetched employee id=${id}`);
  return of(employee);
  }
}

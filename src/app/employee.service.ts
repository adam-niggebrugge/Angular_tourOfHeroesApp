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
    this.messageService.add('EmployeeService: fetch employees');
    return employees;
  }

}

import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  selectedEmployee?: Employee;
  employees : Employee[] = [];

  constructor(private employeeService: EmployeeService, private messageService: MessageService) { }

  ngOnInit() {
    this.getEmployees();
  }

  // In eariler step details were linked off employee list, dashboard and routing changed how to navigate to the details and no longer requires logic to select and return employee
  //  onSelect(employee: Employee): void {
  //   this.selectedEmployee = employee;
  //   this.messageService.add(`EmployeesComponent: Selected employee id=${employee.id}`);
  // }

   // Currently has a synchronous signature. Would not be practical in real app, as server might have to return this data to angular components
   getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

}

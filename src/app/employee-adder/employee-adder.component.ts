import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'


@Component({
  selector: 'app-employee-adder',
  templateUrl: './employee-adder.component.html',
  styleUrls: ['./employee-adder.component.css']
})
export class EmployeeAdderComponent implements OnInit {
  @Input() employee?: Employee;

  constructor(
    private route: ActivatedRoute, //holds information about route instance to EmployeeDetailComponent
    private employeeService: EmployeeService,
    private location: Location, //angular service for browser ineraction, like navigating back
  ) { }

  ngOnInit(): void {
  }

  add(name: string, position: string): void {
    name = name.trim();
    if(!name && !position) { return; }
    // if neglect subscribe(), the service will not send the request to the server. As a rule, an Observable does nothing until something subscribes.
    this.employeeService.addEmployee( { name, position } as Employee ).subscribe(() => this.goBack());
      // .subscribe(employee => {
      //   this.employees.push(employee);
      // })
  }


  goBack(): void {
    this.location.back();
  }
}

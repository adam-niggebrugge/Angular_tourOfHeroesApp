import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { InMemoryDataService } from '../in-memory-data.service';

//for select filling
interface Position {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employee-adder',
  templateUrl: './employee-adder.component.html',
  styleUrls: ['./employee-adder.component.css']
})
export class EmployeeAdderComponent implements OnInit {
  @Input() employee?: Employee;
  employees : Employee[] = [];
  
  positions: Position[] = [
    {value: "Production Engineer", viewValue: "Production Engineer"},
    {value: "Quotation Engineer Manager", viewValue: "Quotation Engineer Manager"},
    {value: "R&D Engineer", viewValue: "R&D Engineer"},
    {value: "Engineering Manager", viewValue: "Engineering Manager"},
  ];

  constructor(
    private route: ActivatedRoute, //holds information about route instance to EmployeeDetailComponent
    private employeeService: EmployeeService,
    private location: Location, //angular service for browser ineraction, like navigating back
    private idMaker: InMemoryDataService,
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  add(name: string, position: string): void {
    name = name.trim();
    if(!name && !position) { return; }
    let newId = this.idMaker.genId(this.employees);
    // if neglect subscribe(), the service will not send the request to the server. As a rule, an Observable does nothing until something subscribes.
    this.employeeService.addEmployee( { id: newId, name: name, position: position } as Employee ).subscribe(() => this.goBack());
      // .subscribe(employee => {
      //   this.employees.push(employee);
      // })
  }

  
  goBack(): void {
    this.location.back();
  }
}

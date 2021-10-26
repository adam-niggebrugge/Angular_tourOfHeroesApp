import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee?: Employee;

  constructor( 
    private route: ActivatedRoute, //holds information about route instance to EmployeeDetailComponent
    private employeeService: EmployeeService, //used to get data from service, could be server db (tutorial mock data source)
    private location: Location, //angular service for browser ineraction, like navigating back
  ) { }

  ngOnInit(): void {
    this.getEmployee(); 
  }
  //Now that routes are being used to open a details view - logic is required to move objects between components
  getEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee)
  }

  goBack(): void {
    this.location.back();
  }
}

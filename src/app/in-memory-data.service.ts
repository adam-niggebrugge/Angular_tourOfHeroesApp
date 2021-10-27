import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { 
        id: 101,
        name: 'Adam Niggebrugge',
        role: "Production Engineer",
    },
    { 
        id: 1051,
        name: 'Tom Weeks',
        role: "Production Engineer",
    },
    { 
        id: 21,
        name: 'Matt Nordmeyer',
        role: "Prodution Electrical Engineer Manager",
    },
    { 
        id: 222,
        name: 'Ethan Stallman',
        role: "Production Engineer",
    },
    { 
        id: 3811,
        name: 'Marwan Dayeh',
        role: "Production Engineer",
    },
    { 
        id: 3939,
        name: 'Kirstie Schnieder',
        role: "Production Engineer",
    },
    { 
        id: 659,
        name: 'Brady Dufau',
        role: "Quotation Engineer Manager",
    },
    {
        id: 12,
        name: 'Nicholas Lang',
        role: "R&D Engineer",
    },
    {
        id: 131,
        name: 'Anthony Soellner',
        role: "R&D Engineer",
    },
    {
        id: 28,
        name: 'Benjamin Flick',
        role: "Engineering Manager",
    },
    ];
    return {employees};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 11;
  }
}
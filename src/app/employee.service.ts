import { Injectable } from '@angular/core';
//for connection to data source
import { HttpClient, HttpHeaders } from '@angular/common/http';
// key class of RxJS Library https://rxjs.dev/
import { Observable, of } from 'rxjs';
//To catch errors, you "pipe" the observable result from http.get() through an RxJS catchError() operator.
import { catchError, map, tap } from 'rxjs/operators';

//Link to mock data and object defintiion
import { Employee } from  './employee';
import { EMPLOYEES } from './mock-employees';
import { MessageService } from './message.service';


//Provided from ng generate, which will now allow angular to inject this script as needed
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  /**
   *  form :base/:collectionName with the address of the employees resource on the server. Here 
   * base is the resource to which requests are made, and collectionName is the employees data 
   * object in the in-memory-data-service.ts
   * */
  private employeesUrl = 'api/employees';  // URL to web api
  //seen in other MVCs that the below headers is often repeated. 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  getEmployees(): Observable<Employee[]> {
    //when using RxJS mock
    //   const employees = of(EMPLOYEES);
    //  // this.messageService.add('EmployeeService: fetched employees'); //with private log moving where messages would reside
    //   return employees;
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        // RxJS tap() operator, which looks at the observable values, does something with those values, and passes them along. The tap() call back doesn't touch the values themselves.
        tap(_ => this.log('fetched employees')),
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  //
  // getEmployee(id: number): Observable<Employee> {
  //   // For now, assume that an employee with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const employee = EMPLOYEES.find(e => e.id === id)!;
  //   this.messageService.add(`EmployeeService: fetched employee id=${id}`);
  //   return of(employee);
  // }

  /** GET employee by id. Return `undefined` when id not found */
  getEmployeeNo404<Data>(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/?id=${id}`;
    return this.http.get<Employee[]>(url)
      .pipe(
        map(employees => employees[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} employee id=${id}`);
        }),
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
      );
  }

  /** GET employee by id. Will 404 if id not found */
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`fetched employee id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  /** PUT: update the employee on the server */
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated employee id=${employee.id}`)),
        catchError(this.handleError<any>('updateEmployee'))        
      );
  }

  /** POST: add a new employee to the server 
   * It expects the server to generate an id for the new employee,
   * which it returns in the Observable<Employee> to the caller.
  */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
      tap((newEmployee: Employee) => this.log(`added employee w/ id=${newEmployee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }


  /** DELETE: delete the employee from the server */
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  /* GET employees whose name contains search term */
  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty employee array.
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found employees matching "${term}"`) :
        this.log(`no employees matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchEmployee', []))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a EmployeeService message with the MessageService */
  private log(message: string) {
      this.messageService.add(`EmployeeService: ${message}`);
  }
  
}

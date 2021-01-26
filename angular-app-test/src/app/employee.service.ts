import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private _http:HttpClient) { }
  private _url= '../assets/data/employees.json';

  getEmployees():Observable<IEmployee[]>{
    /*return [
      {"id": 1, "name": "Raju", "age": 35},
      {"id": 2, "name": "NagaRaju","age": 36},
      {"id": 3, "name": "VenkatRaju","age": 37},
      {"id": 4, "name": "TRaju", "age": 38},
      {"id": 5, "name": "VRaju", "age": 39},
      {"id": 6, "name": "LRaju", "age": 40}
    ];*/
    return this._http.get<IEmployee[]>
    (this._url)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
      return throwError(error.message  || "Unknow  Server messag....");      
  }

}

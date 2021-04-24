import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public static getStudents(): any []{
    return [
      {"id": 1, "name": "Raju", "age": 35},
      {"id": 2, "name": "NagaRaju","age": 36},
      {"id": 3, "name": "VenkatRaju","age": 37},
      {"id": 4, "name": "TRaju", "age": 38},
      {"id": 5, "name": "VRaju", "age": 39},
      {"id": 6, "name": "LRaju", "age": 40}
    ];
  }
  constructor() { }
}

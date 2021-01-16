import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariables',
  template: `
    <input #myInput type="text">
    <button>Log</button>
  `,
  styleUrls: ['./templatereferencevariables.component.css']
})
export class TemplatereferencevariablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

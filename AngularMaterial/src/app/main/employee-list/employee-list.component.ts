import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  listData!: MatTableDataSource<any>;

  displayedColumns: string[] = ['fullName','email','mobile','city'];

  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public empService:EmployeeService) { }

  ngOnInit(){
    this.empService.getEmployees()
    .subscribe(list => {
      let array = list.map(
        item =>{
          return{
            $key:item.key,
            ...item.payload.val()
          }
        }
      )
      this.listData = new MatTableDataSource(array)
      this.listData.sort = this.sort
      this.listData.paginator = this.paginator
    })
  }

}

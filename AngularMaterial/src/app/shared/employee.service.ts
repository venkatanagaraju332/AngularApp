import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FirebaseOperation } from '@angular/fire/database/interfaces';
import { FormGroup,FormControl,Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   employeeList!: AngularFireList<any>;

  constructor(public firebase: AngularFireDatabase,
    public datePipe:DatePipe) { }

  form: FormGroup = new FormGroup(
    {
      $key:new FormControl(null),
      fullName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      mobile:new FormControl('',[Validators.required, Validators.minLength(10)]),
      city:new FormControl(''),
      gender:new FormControl('1'),
      department:new FormControl('0'),
      hireDate:new FormControl(''),
      isPermanent:new FormControl(false),

    }
  )
  
  initializeFormGroup(){
    this.form.setValue(
      {
        $key:null,
        fullName:'',
        email:'',
        mobile:'',
        city:'',
        gender:'',
        department:'1',
        hireDate:0,
        isPermanent:false
      }
    )
  }


  getEmployees(){
    this.employeeList = this.firebase.list('emplyoees');
    return this.employeeList.snapshotChanges();
  }

  insertEmployee(emp: { fullName: any; email: any; mobile: any; city: any; gender: any; department: any; hireDate: string | number | Date; isPermanent: any; }){
    this.employeeList.push({
      fullName:emp.fullName,
      email:emp.email,
      mobile:emp.mobile,
      city:emp.city,
      gender:emp.gender,
      deparment:emp.department,
      hireDate:emp.hireDate == "" ? "" : this.datePipe.transform(emp.hireDate,'yyyy-MM-dd'),
      isPermanent:emp.isPermanent
    })
  }

  updateEmployee(emp: { $key: FirebaseOperation; fullName: any; email: any; mobile: any; city: any; gender: any; department: any; hireDate: string | number | Date; isPermanent: any; }){
    this.employeeList.update(emp.$key,{
      fullName:emp.fullName,
      email:emp.email,
      mobile:emp.mobile,
      city:emp.city,
      gender:emp.gender,
      deparment:emp.department,
      hireDate:emp.hireDate == "" ? "" : this.datePipe.transform(emp.hireDate,'yyyy-MM-dd'),
      isPermanent:emp.isPermanent
    })
  }

  deleteEmployee($key:string){
    this.employeeList.remove($key);
  }

}

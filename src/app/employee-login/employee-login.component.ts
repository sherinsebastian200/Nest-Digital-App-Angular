import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  

constructor(private route:Router){}
  empid=""
  password=""

  employeeLog=()=>{
    if(this.empid=="1122"&&this.password=="12345"){
      this.route.navigate(["/addallcourses"])
    }else{
      alert("Not a valid credentials")
    }
  }
}

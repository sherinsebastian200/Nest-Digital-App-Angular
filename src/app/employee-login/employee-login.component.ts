import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  name=""
  password=""

  employeeLog=()=>
  {
    let data:any={"name":this.name,"password":this.password}
    console.log(data)
   

    
  }


}



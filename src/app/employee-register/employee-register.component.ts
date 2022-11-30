import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {
  id=""
  firstname=""
  lastname=""
  houseno=""
  street=""
  pincode=""
  district=""
  state=""
  country=""
  mobno=""
  email=""
  parentname=""
  gender=""
  degree=""
  yearexp=""
  joindate=""
  username=""
  password=""
  confirmpassword=""

  employeeReg=()=>
  {
    let data:any= {"id":this.id,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"street":this.street,"pincode":this.pincode,"district":this.district,"state":this.state,"country":this.country,"nmobno":this.mobno,"email":this.email,"parentname":this.parentname,"gender":this.gender,"degree":this.degree,"yearexp":this.yearexp,"joindate":this.joindate,
  "username":this.username,
  "password":this.password,
  "confirmpassword":this.confirmpassword
  }
  console.log(data)
  if (this.password=="12345" && this.confirmpassword=="12345") {
    alert("Registered Successfully")
    
  } else {
    alert("Password and confirm password doesn't match")
    
  }

  
}


}



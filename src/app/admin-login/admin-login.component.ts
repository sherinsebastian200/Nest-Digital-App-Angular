import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private route:Router){}
  name=""
  password=""

  readValues=()=>{
    
    if(this.name=="admin" && this.password=="nestdigital"){
      this.route.navigate(["/viewallcourses"])
    }else{
      alert("Not a valid credentials")
    }
  }
}






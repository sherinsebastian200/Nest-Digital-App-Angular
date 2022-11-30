import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse-nest',
  templateUrl: './addcourse-nest.component.html',
  styleUrls: ['./addcourse-nest.component.css']
})
export class AddcourseNestComponent {courseTitle=""
courseDescription=""
courseDuration=""
courseDate=""
courseVenue=""

constructor(private api:ApiService){}

readValues=()=>
{
let data :any = {"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate }
console.log(data)
this.api.addCourse(data).subscribe(
(response :any)=>{
  console.log(response)
  if (response.status=="success") {
    alert("course added succesfully")
    this.courseTitle=""
    this.courseDescription=""
    this.courseDuration=""
    this.courseDate=""
    this.courseVenue=""
  
    
  } else {
    alert("something went wrong")
    
  }

}
)

}
}
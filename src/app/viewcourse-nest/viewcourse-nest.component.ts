import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse-nest',
  templateUrl: './viewcourse-nest.component.html',
  styleUrls: ['./viewcourse-nest.component.css']
})
export class ViewcourseNestComponent {
  constructor(private api:ApiService){
    api.fetchCourses().subscribe(
      (response) =>{
        this.loading = false
        this.courses=response;
      }
    )
  }

  courses:any = []
  loading:boolean = true

}

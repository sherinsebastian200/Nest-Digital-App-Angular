import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfriend-nest',
  templateUrl: './addfriend-nest.component.html',
  styleUrls: ['./addfriend-nest.component.css']
})
export class AddfriendNestComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""


  constructor(private api:ApiService){}

  readValue=()=>
  {
    let  data:any={"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    console.log(data)
    this.api.addFriend(data).subscribe(
      (response :any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Friend added succesfully")
          this.name=""
          this.friendName=""
          this.friendNickName=""
          this.DescribeYourFriend=""
          } else {
          alert("something went wrong")
          
        }
      }
    )

    }
  }
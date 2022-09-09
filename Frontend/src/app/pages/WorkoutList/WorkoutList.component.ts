import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-WorkoutList',
  templateUrl: './WorkoutList.component.html',
  styleUrls: ['./WorkoutList.component.scss']
})
export class WorkoutListComponent implements OnInit {

  username; firstname; lastname; email;
  
  constructor(private router:Router) { }
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

  ngOnInit() {
    // if (localStorage.getItem("username") == null) {
    //   this.router.navigateByUrl("/User/forbidden");
    // }
    // this.username = localStorage.getItem('username');
    // this.email = this.username+"@gmail.com";
    
  }

}

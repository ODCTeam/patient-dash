import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Estate chain';
  constructor( private router: Router) { 
    this.router.navigate(['/'+localStorage.getItem("Role")]
  }

}

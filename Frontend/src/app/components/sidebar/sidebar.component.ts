import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const PatientROUTES: RouteInfo[] = [
  { path: '', title: 'Schedule', icon: 'ni-building text-primary', class: '' },
  { path: 'WorkoutList', title: 'Workouts List', icon: 'ni-single-02 text-yellow', class: '' },
  { path: 'ChatApp', title: 'Chat App', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/Auth/login', title: 'login', icon: 'ni-key-25 text-info', class: '' },
  { path: '/Auth/register', title: 'register', icon: 'ni-circle-08 text-pink', class: '' },
  { path: 'forbidden', title: 'forbidden', icon: 'ni-circle-08 text-pink', class: '' }
];
export const DoctorROUTES: RouteInfo[] = [
  { path: 'PatientList', title: 'Patient List', icon: 'ni-building text-primary', class: '' },
  { path: 'DeviceList', title: 'Device List', icon: 'ni-single-02 text-yellow', class: '' },
  { path: 'ChatApp', title: 'Chat App', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: 'WorkoutsList', title: 'WorkoutsList', icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: 'forbidden', title: 'forbidden', icon: 'ni-circle-08 text-pink', class: '' }
];
export const AdminROUTES: RouteInfo[] = [
  { path: '/Admin/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/Admin/Immobiliers', title: 'Immobiliers', icon: 'ni-bullet-list-67 text-red', class: '' }
];
export const UserROUTES: RouteInfo[] = [
  { path: 'WorkoutList', title: 'My profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/User/MyImmobiliers', title: 'My Immobiliers', icon: 'ni-house text-yellow', class: '' },
  { path: '/User/PatientSchedule', title: 'Immobiliers for sale', icon: 'ni-shop text-red', class: '' },
  { path: '/User/AddImmobilier', title: 'Add Immobilier', icon: 'ni-add text-yellow', class: '' },
  { path: '/User/ModifyImmobilier', title: 'Modify Immobilier', icon: 'ni-add text-yellow', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public customRouter: any;
  constructor(private authService: AuthServiceService, private router: Router) { }

  Logout() {
    this.authService.logout()
    this.router.navigateByUrl("/Auth/login");
  }
  ngOnInit() {
    if (localStorage.getItem("Role") != "Doctor") {
      this.customRouter = PatientROUTES;
    }
    else if (localStorage.getItem("Role") != "Patient") {
      this.customRouter = DoctorROUTES;
    }
    else if (localStorage.getItem("Role") != "0") {
      this.router.navigateByUrl("/User/forbidden");
    }

    if (localStorage.getItem("username") == null) {
      this.router.navigateByUrl("/User/forbidden");
    }

    this.menuItems = this.customRouter.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

}

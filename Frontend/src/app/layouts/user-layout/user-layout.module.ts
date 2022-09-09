import { AvatarModule } from 'ngx-avatar';
import { WorkoutListComponent } from '../../pages/WorkoutList/WorkoutList.component';
import { AddImmobilierComponent } from './../../pages/add-immobilier/add-immobilier.component';
import { ModifyImmobilierComponent } from './../../pages/modify-immobilier/modify-immobilier.component';
import { MyImmobilierComponent } from './../../pages/my-immobilier/my-immobilier.component';
import { PatientScheduleComponent } from '../../pages/PatientSchedule/PatientSchedule.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AvatarModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    PatientScheduleComponent,
    MyImmobilierComponent,
    WorkoutListComponent,
    AddImmobilierComponent,
    ModifyImmobilierComponent
  ]

})
export class UserLayoutModule { }
  // public role:any;

  // constructor( private router: Router) { 
  //   this.role = localStorage.getItem("Role");
  //   if ( this.role = "Doctor"){
  //     this.router.navigate(['Doctor']);
  //   }
  //   else if ( this.role = "Patient"){
  //     this.router.navigate(['Patient']);
  //   }
  // }


import { AddImmobilierComponent } from './pages/add-immobilier/add-immobilier.component';
import { ModifyImmobilierComponent } from './pages/modify-immobilier/modify-immobilier.component';
import { MyImmobilierComponent } from './pages/my-immobilier/my-immobilier.component';
import { ImmobilierDetailsComponent } from './pages/immobilier-details/immobilier-details.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { PatientScheduleComponent } from './pages/PatientSchedule/PatientSchedule.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { ApprouveAccountComponent } from './pages/approuve-account/approuve-account.component';
import { ChatAppComponent } from './pages/ChatApp/ChatApp.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkoutListComponent } from './pages/WorkoutList/WorkoutList.component';
import { PatientListComponent } from './pages/PatientList/PatientList.component';
import { DeviceListComponent } from './pages/DeviceList/DeviceList.component';
import { ExercisesListComponent } from './pages/ExercisesList/ExercisesList.component';
import { IconsComponent } from './pages/icons/icons.component';
import { MapsComponent } from './pages/maps/maps.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [

  {
    path: '',
    component: UserLayoutComponent,

  },
  {
    path: 'Admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: WorkoutListComponent },
      { path: 'ChatApp', component: ChatAppComponent },
      { path: 'Immobiliers', component: ChatAppComponent },
      { path: 'ImmobilierDetails/:id', component: ImmobilierDetailsComponent }
    ]
  },
  {
    path: 'Auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'approuveAccount', component: ApprouveAccountComponent },
      { path: 'register', component: RegisterComponent }

    ]
  },
  {
    path: 'Patient',
    component: UserLayoutComponent,
    children: [
      { path: '', component: PatientScheduleComponent },
      { path: 'PatientSchedule', component: PatientScheduleComponent },
      { path: 'WorkoutList', component: WorkoutListComponent },
      { path: 'ChatApp', component: ChatAppComponent },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: 'ModifyImmobilier', component: ModifyImmobilierComponent },
      { path: 'ModifyImmobilier/:id', component: ModifyImmobilierComponent }
    ]
  },
  {
    path: 'Doctor',
    component: UserLayoutComponent,
    children: [
      { path: '', component: PatientListComponent },
      { path: 'PatientList', component: PatientListComponent },
      { path: 'DeviceList', component: DeviceListComponent },
      { path: 'ChatApp', component: ChatAppComponent },
      { path: 'ExercisesList', component: ExercisesListComponent },
      { path: 'forbidden', component: ForbiddenComponent },
    ]
  },
  // {path: 'Patient',redirectTo: "/PatientSchedule",pathMatch:"full" },
  // {path: 'Doctor',redirectTo: "/PatientList",pathMatch:"full" },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [
    [RouterModule]
  ],
})
export class AppRoutingModule { }

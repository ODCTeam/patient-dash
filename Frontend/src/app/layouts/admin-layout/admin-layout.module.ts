import { ImmobilierDetailsComponent } from './../../pages/immobilier-details/immobilier-details.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

//import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { WorkoutListComponent } from '../../pages/WorkoutList/WorkoutList.component';
import { ChatAppComponent } from '../../pages/ChatApp/ChatApp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    ChatAppComponent,
    ImmobilierDetailsComponent,
    IconsComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}

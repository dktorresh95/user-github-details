import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from './user-details.component';
import { FollowersPipe } from '../pipes/followers.pipe';
import { UserDetailsRoutingModule } from './user-details-routing.module';


@NgModule({
  declarations: [
    UserDetailsComponent,
    FollowersPipe
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }

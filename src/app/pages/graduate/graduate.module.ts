import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraduateComponent } from './graduate.component';
import { ProfileComponent } from './profile/profile.component';
import { GraduateRoutingModule } from './graduate-routing.module';

@NgModule({
  declarations: [GraduateComponent, ProfileComponent],
  imports: [
    CommonModule,
    GraduateRoutingModule,
  ],
})
export class GraduateModule { }

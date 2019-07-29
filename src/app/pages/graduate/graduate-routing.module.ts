import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraduateComponent } from './graduate.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: GraduateComponent,
    children: [
      {
        path: ':id',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class GraduateRoutingModule {
}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { GraduatesAdminComponent } from './graduates-admin/graduates-admin.component';
import { GraduateDetailsAdminComponent } from './graduate-details-admin/graduate-details-admin.component';
import { AdminPainelComponent } from './admin-painel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewRegisterAdminComponent } from './new-register-admin/new-register-admin.component';
import { NewRegisterDetailsAdminComponent } from './new-register-details-admin/new-register-details-admin.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { OffersAdminComponent } from './offers-admin/offers-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPainelComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'graduates',
        component: GraduatesAdminComponent,
      },
      {
        path: 'graduates/:id',
        component: GraduateDetailsAdminComponent,
      },
      {
        path: 'new-register',
        component: NewRegisterAdminComponent,
      },
      {
        path: 'new-register/:id',
        component: NewRegisterDetailsAdminComponent,
      },
      {
        path: 'create-offer',
        component: CreateOfferComponent,
      },
      {
        path: 'offers',
        component: OffersAdminComponent,
      },
      {
        path: 'miscellaneous',
        loadChildren: () => import('../pages/miscellaneous/miscellaneous.module')
          .then(m => m.MiscellaneousModule),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
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
export class AdminPainelRoutingModule {
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraduatesAdminComponent } from './graduates-admin/graduates-admin.component';
import { GraduateDetailsAdminComponent } from './graduate-details-admin/graduate-details-admin.component';
import { AdminPainelComponent } from './admin-painel.component';
import { NewRegisterAdminComponent } from './new-register-admin/new-register-admin.component';
import { NewRegisterDetailsAdminComponent } from './new-register-details-admin/new-register-details-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import {
  NbMenuModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbButtonModule,
  NbActionsModule,
  NbUserModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule } from '@nebular/theme';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdminPainelRoutingModule } from './admin-painel-routing.module';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { OffersAdminComponent } from './offers-admin/offers-admin.component';



@NgModule({
  declarations: [GraduatesAdminComponent, GraduateDetailsAdminComponent, AdminPainelComponent,
  NewRegisterAdminComponent, NewRegisterDetailsAdminComponent, DashboardComponent, CreateOfferComponent,
  OffersAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminPainelRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    MiscellaneousModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
  ],
})
export class AdminPainelModule { }

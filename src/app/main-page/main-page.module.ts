import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { GraduateDetailsComponent } from './graduate-details/graduate-details.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbIconModule,
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
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GraduatesComponent,
    GraduateDetailsComponent,
    RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MainPageRoutingModule,
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
export class MainPageModule { }

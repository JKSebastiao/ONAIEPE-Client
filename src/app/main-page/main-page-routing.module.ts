import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomeComponent } from './home/home.component';
import { GraduatesComponent } from './graduates/graduates.component';
import { GraduateDetailsComponent } from './graduate-details/graduate-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'graduates',
        component: GraduatesComponent,
      },
      {
        path: 'graduates/:id',
        component: GraduateDetailsComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
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
export class MainPageRoutingModule {
}


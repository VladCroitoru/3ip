import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckinDoneComponent } from './checkin-done/checkin-done.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutDoneComponent } from './checkout-done/checkout-done.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent,
  },
  {
    path: 'checkin',
    component: CheckinComponent,
  },
  {
    path: 'checkin/:id',
    component: CheckinComponent,
  },
  {
    path: 'checkin/:id/done',
    component: CheckinDoneComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'checkout/:id',
    component: CheckoutComponent,
  },
  {
    path: 'checkout/:id/done',
    component: CheckoutDoneComponent,
  },
  {
    path: 'aboutus',
    component: AboutComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

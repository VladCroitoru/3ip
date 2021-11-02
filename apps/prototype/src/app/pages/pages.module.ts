import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [HomeComponent, CheckinComponent, CheckoutComponent],
  imports: [CommonModule, PagesRoutingModule, ThemeModule],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ListingComponent } from './listing/listing.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {path : 'listing', component : ListingComponent},
  {path : 'confirmation', component : ConfirmationComponent},
  {path : 'checkout', component : CheckoutComponent},
  {path : 'thanks', component : ThanksComponent},
  {path : '', redirectTo : '/listing', pathMatch : 'full'},
  {path : '**', redirectTo : '/listing', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

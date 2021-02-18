import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThanksComponent } from './thanks/thanks.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MycourselComponent } from './mycoursel/mycoursel.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ConfirmationComponent,
    CheckoutComponent,
    ThanksComponent,
    HeaderComponent,
    FooterComponent,
    MycourselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

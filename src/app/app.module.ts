import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannersComponent } from './banners/banners.component';
import { ProductComponent } from './product/product.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { VideoComponent } from './video/video.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannersComponent,
    ProductComponent,
    Product1Component,
    Product2Component,
    VideoComponent,
    LoginComponent,
    CartComponent,
    ProductgridComponent,
    FooterComponent,
    HomepageComponent,
    AboutUsComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

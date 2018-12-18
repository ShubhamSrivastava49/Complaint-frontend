import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { RoutingService } from './services/routing-service';
import { AuthInterceptor } from './services/auth.interceptor';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './services/auth-services';
import { CustomerModule } from './customer/customer.module';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,CustomerModule
  ],
  providers: [RoutingService,AuthService,
  {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }

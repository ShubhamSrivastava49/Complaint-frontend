import { NgModule } from "@angular/core";
import { CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerComponent } from "./customer.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[CustomerComponent],
    imports:[
        CustomerRoutingModule,HttpClientModule,BrowserModule,CommonModule,FormsModule
    ]
})
export class CustomerModule {

}
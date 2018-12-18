import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import{ AppConstants} from '../services/config/backend-endpoint';
import { AuthService } from '../services/auth-services';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  _baseURL : string;
  showCustomerComplaint:boolean;
  complaints =[];
  fileComplaint:boolean;

  constructor(private httpClient:HttpClient, private authService:AuthService){
     this._baseURL = AppConstants.baseURL
  }
 

  ngOnInit() {

  }
  getCustomerComplaints(){
    const token = this.authService.getToken()
    const headers = new HttpHeaders().set('auth',token)
    this.showCustomerComplaint = true;
    return this.httpClient.get( this._baseURL + '/customerComplaint',{headers:headers})
  .subscribe((data:any[])=>{
     this.complaints = data
     
  }

  )

  }

  lodgeComplaint(){
    this.fileComplaint = true;
  }

  lodgeNewComplaint(form:NgForm){
    const token = this.authService.getToken()
    const headers = new HttpHeaders().set('auth',token)
    return this.httpClient.post( this._baseURL + '/customerComplaint',form.value,{headers:headers})
  .subscribe((data:any[])=>{
    console.log('rgk',data);
    this.getCustomerComplaints()
  }

  )
    
  }
  

}

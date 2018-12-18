import { HttpClient, HttpHeaders } from "@angular/common/http";
import{ AppConstants} from './config/backend-endpoint';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { AuthService } from "./auth-services";



@Injectable()
export class RoutingService {
    _baseURL : string;

   constructor(private httpClient:HttpClient,private authService:AuthService){
      this._baseURL = AppConstants.baseURL
   }
  


   registerUser(userData:Object){
     
    return this.httpClient.post( this._baseURL + '/registerCustomer',userData,)
  

 }

 
}
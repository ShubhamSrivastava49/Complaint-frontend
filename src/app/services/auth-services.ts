import { HttpClient, HttpHeaders } from "@angular/common/http";
import{ AppConstants} from '../services/config/backend-endpoint';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";



@Injectable()
export class AuthService {

    _baseURL : string;
     token :string;
     LOCAL_TOKEN_KEY:string = 'yourTokenKey';
     isAuthenticated :boolean;
     authToken :string;

   constructor(private httpClient:HttpClient){
      this._baseURL = AppConstants.baseURL
   }


  
   logInUser(userData:Object){
     console.log('userData',userData)
    return this.httpClient.post( this._baseURL + '/login',userData)
    .map((data:any) =>{
          this.token = data.token;
          return data;
    })
    
    
 }
 
 storeUserCredentials() {
  window.localStorage.setItem(this.LOCAL_TOKEN_KEY, this.token);


}

public getToken(): string {
  return localStorage.getItem('yourTokenKey');

}

}








  
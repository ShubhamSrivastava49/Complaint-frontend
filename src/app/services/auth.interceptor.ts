import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth-services";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService:AuthService){}
   intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{
      // const copiedReq = req.clone({headers:req.headers.append('auth', authService.getToken())});
   return next.handle(req);
   }
}


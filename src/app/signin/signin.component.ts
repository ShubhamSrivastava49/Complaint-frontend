import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth-services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  message;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

   logIn(form:NgForm){
    this.authService.logInUser(form.value)
    .subscribe(
       (data:any) =>{
        if(data.msg ==='Logged In Customer') {
          this.router.navigate(['/customer'])
        }
        if(data.msg ==='Logged in Agent'){
          this.router.navigate(['/agents'])
        }
       },
      (error:any)=>{
         this.message = error
      }
    )
  }

}

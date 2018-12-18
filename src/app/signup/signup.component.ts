import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoutingService } from '../services/routing-service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  message:string =""



  constructor(private routingService:RoutingService) { }

  ngOnInit() {
  }

  registerCustomer(form:NgForm){
    let val =form.value;
    this.routingService.registerUser(val)
    .subscribe(
       (data:any)=> this.message = data.msg
    )
  }

 
  

  // onSave(){
  //   this.routerService.getMovies()
  //   .subscribe(
  //       (recipes:any[]) => this.servers = recipes
  //    );
   
  //   }

}

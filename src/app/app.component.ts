import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'templaTedrivenForm';
  @ViewChild('signUp') signUp!: NgForm;

  mocArr = [
    {contactMode: 'Email', id: 123},
    {contactMode: 'Phone No', id: 124}
  ]

  userDetails = {
      "username": "adityawaghmare",
      "email": "aditya@gmail.com",
      "passwordRecoveryQuestion": "favouriteCountry",
      "answer": "Spain",
      "isSubscribed": true,
      "modeOfContact": "Phone No"
  }

  constructor(){

  }
  ngOnInit(): void {
    
  }

  onSignUp(signUp: NgForm){
    // console.log(signUp);
    console.log(signUp.value);
  }

  onEdit(){
    this.signUp.form.patchValue(this.userDetails)
  }

 
  
}

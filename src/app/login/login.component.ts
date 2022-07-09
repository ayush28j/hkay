import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  phoneNumber = new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[\\d]*$")])

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.phoneNumber.valueChanges.subscribe(val => {
    //   console.log(this.phoneNumber.errors);
      
    // })
  }

  generateOTP(){
    this.router.navigateByUrl("verify-otp")
  }

}

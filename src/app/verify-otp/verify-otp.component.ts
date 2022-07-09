import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {

  otpControl = new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern("^[\\d]*$")])

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitOTP(){
    if(this.otpControl.value=="1234"){
      this.router.navigateByUrl("home")
    }
  }

}

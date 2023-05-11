import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!:FormGroup;
  constructor(private userlogin:UserloginService){

  }
 ngOnInit() {
this.signupForm = new FormGroup({
  username: new FormControl(),
  name:new FormControl(),
  password: new FormControl(),
})

 }
  signup(){
   this.userlogin.signup(this.signupForm.value)

  }


}

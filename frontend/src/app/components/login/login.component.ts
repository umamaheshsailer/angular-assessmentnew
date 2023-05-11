import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { UserloginService } from 'src/app/services/userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  loginForm!:FormGroup;
  constructor(private userlogin:UserloginService){

  }
 ngOnInit() {
this.loginForm = new FormGroup({
  username: new FormControl(),
  password: new FormControl(),
})
 }
  Login(){
   this.userlogin.login(this.loginForm.value)
   console.log(this.loginForm.value)
  }

}

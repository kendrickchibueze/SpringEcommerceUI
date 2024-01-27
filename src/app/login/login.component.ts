import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  hidePassword= true
  loginForm !: FormGroup


  constructor(private formBuilder:FormBuilder,
              private authService:AuthService,
              private snackBar:MatSnackBar,
              private router:Router) {

  }


  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      email:[null, [Validators.required]],
      password:[null, [Validators.required]],
    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword
  }

  onSubmit():void {
    const username = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value

    this.authService.login(username, password).subscribe(
      (res)=>{
        this.snackBar.open("Login success", 'ok', {duration:5000})

      },
      (error)=>{
        this.snackBar.open("Bad credentials", 'Error', {duration:5000})

      }
    )

  }
}

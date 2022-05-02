import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      conta: ["",[Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
  }

userModel = new User("","","","","")

logar() {
  console.log(this.userModel)
}
}

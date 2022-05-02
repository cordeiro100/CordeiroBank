import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

cadastroForm: FormGroup



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ["", [Validators.required]],
      sobrenome: ["", [Validators.required]],
      conta: ["", [Validators.required, Validators.minLength(4)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
      
     
      })
  }


userModel = new User("","","","","")


cadastrar(){
  console.log(this.userModel)
}
}

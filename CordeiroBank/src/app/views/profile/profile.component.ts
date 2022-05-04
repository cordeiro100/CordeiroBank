import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastComponent } from '@ngneat/hot-toast/lib/components/hot-toast/hot-toast.component';
import { pipe } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TransferenciasService } from 'src/app/services/transferencias.service';

import { Transferencia } from 'src/app/transferencia';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  valor: number;
  destino: number;
  data: Date;
  transferencias: any[];
  transferenciaForm: FormGroup
  saldo = 5350;

  user$ = this.authService.currentUser$;

  constructor(
    private authService: AuthenticationService,
    private transferenciasService: TransferenciasService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
this.transferenciaForm = this.formBuilder.group({
  valor: ["", [Validators.required]],
  destino: ["",[Validators.required, Validators.minLength(4), Validators.minLength(4)]]
})



    this.transferenciasService
      .getTransferencia()
      .subscribe((transferencias: Transferencia[]) => {
        console.table(transferencias);
        this.transferencias = transferencias;
      });
  }

  transferir(form: NgForm) {
    this.transferenciasService
      .addTransferencia(form.value)
      .then(() => form.reset());

      this.saldo = this.saldo - this.valor

     
    

     
  }
}

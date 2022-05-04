import { Component, OnInit } from '@angular/core';
import { Transferencia } from 'src/app/transferencia';
import { TransferenciasService } from 'src/app/services/transferencias.service';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[]

  constructor(private transferenciasService: TransferenciasService) { }

  ngOnInit(): void {
    this.transferenciasService
      .getTransferencia()
      .subscribe((transferencias: Transferencia[]) => {
        console.table(transferencias);
        this.transferencias = transferencias;
      });
  }

  }

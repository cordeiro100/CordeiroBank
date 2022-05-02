import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

import { CadastroComponent } from './views/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { TransferenciaComponent } from './views/transferencia/transferencia.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    CadastroComponent,
     LoginComponent,
     TransferenciaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

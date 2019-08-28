import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';

import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './clients/new/new.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './clients/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    LoginComponent,
    NewComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

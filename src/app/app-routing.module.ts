import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component'
import { NewComponent } from './clients/new/new.component'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './clients/dashboard/dashboard.component'

import { AdminGuard } from  './admin/admin.guard';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'clients', component: ClientsComponent, canActivate: [AdminGuard] },
  { path: 'clients/new', component: NewComponent, canActivate: [AdminGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

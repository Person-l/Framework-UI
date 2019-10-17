import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/main/login/login.component';
import { RegisterComponent } from './modules/main/register/register.component';


const routes: Routes = [{ path: '', component: LoginComponent }, { path: 'register', component: RegisterComponent }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

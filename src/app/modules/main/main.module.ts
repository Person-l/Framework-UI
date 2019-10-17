import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule, RouterModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ], exports: [
    LoginComponent, RegisterComponent
  ]
})
export class MainModule { }

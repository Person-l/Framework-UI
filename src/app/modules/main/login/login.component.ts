import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="login-page" nz-row  nzType="flex" nzJustify="center" nzAlign="middle">
    <nz-card [nzBordered]="true">
    <div nz-row nzType="flex" nzJustify="center" nzAlign="middle">
    <nz-avatar [nzSize]="64" nzIcon="user"></nz-avatar>
    </div>
      <form nz-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
        <nz-form-item>
          <nz-form-control nzErrorTip="Please input your username!">
            <nz-input-group nzPrefixIcon="user">
              <input type="text" nz-input formControlName="userName" placeholder="Username" />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-control nzErrorTip="Please input your Password!">
            <nz-input-group nzPrefixIcon="lock">
              <input type="password" nz-input formControlName="password" placeholder="Password" />
            </nz-input-group>
          </nz-form-control>
        </nz-form-item>
        <nz-form-item>
          <nz-form-control>
            <label nz-checkbox formControlName="remember">
              <span>Remember me</span>
            </label>
            <a class="login-form-forgot" class="login-form-forgot">Forgot password</a>
            <button nz-button class="login-form-button" [nzType]="'primary'">Log in</button>
            Or
            <a [routerLink]="['/register']">register now!</a>
          </nz-form-control>
        </nz-form-item>
      </form>
   </nz-card>
</div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;


  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

  }

}

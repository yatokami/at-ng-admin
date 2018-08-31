import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm;
  menu = { name : '1999' };
  subtype = true;
  msgerror1;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required,Validators.minLength(4)]],
      password: ['', Validators.required],
      tel: '',
      telpwd: '',
      checked: ''
    });
  }

  getValidate(name) {
    return this.validateForm.controls[name];
  }

  getError(name) {
    if(this.getValidate(name).invalid && this.getValidate(name).dirty) {
      return 'error';
    }
  }

  onSubmit() {
    console.log(this.validateForm);
    if(this.validateForm.value.username != "admin") {
      this.msgerror1 = "用户名密码错误";
    } else {
      this.msgerror1 = "";
    }
  }

  onSubmitChange() {
    this.subtype = !this.subtype;
  }

  ngOnInit() {
  }

}

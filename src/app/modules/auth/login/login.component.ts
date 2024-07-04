import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  validLogin: any;
  submitted: boolean = false;
  constructor(
    // public authService: AuthService,
    // public notification: NotificationService,
    public fb: FormBuilder,
    public router: Router) { }

  ngOnInit(): void {
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }

  get f() { return this.loginForm.controls; }

  async login() {
    this.submitted = true;
    // if (this.loginForm.invalid) {
    //   return;
    // } else {
    //   await this.authService.login(this.loginForm.value).subscribe((res: any) => {
    //     if (res.access_token) {
    //       localStorage.setItem('token', JSON.stringify(res.access_token));
    //       this.router.navigate(['/home']);
    //     }
    //   }, error => {
    //     console.log(error);
    //   });
    // }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public propEmail: FormControl = new FormControl('eve.holt@reqres.in')
  public propPass: FormControl = new FormControl()
  public form: FormGroup = this.formBuilder.group({
    email: this.propEmail,
    password: this.propPass
  })
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  public submitLogin() {
    this.authService.login(this.form.value).subscribe(() => {
      this.router.navigateByUrl('/')
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/auth/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = 'home'
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }) || {};
  }

  get form() { return this.loginForm?.controls; }
  get userName() { return this.form['username']?.value; }
  get password() { return this.form['password']?.value; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.authenticationService.login(this.userName, this.password)
      .subscribe(data => {
          this.router.navigate([this.returnUrl]);
        });
  }

}

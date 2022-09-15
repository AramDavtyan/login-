import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/auth/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
    }) || {};
  }

  get form() { return this.registerForm?.controls; }
  get userName() { return this.form['username']?.value; }
  get password() { return this.form['password']?.value; }
  get firstName() { return this.form['firstName']?.value; }
  get lastName() { return this.form['lastName']?.value; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;
    this.loading = true;
    this.authenticationService.register(
      this.userName,
      this.password,
      this.firstName,
      this.lastName,
    )
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
      });
  }
}

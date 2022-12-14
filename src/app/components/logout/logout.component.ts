import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/services/auth/authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  returnUrl:string = 'home';
  constructor(private router: Router,
              private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.router.navigate([this.returnUrl]);
  }

}

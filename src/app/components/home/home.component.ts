import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../shared/services/auth/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }

  get getUser() {
    return this.authenticationService.currentUserValue;
  }

}

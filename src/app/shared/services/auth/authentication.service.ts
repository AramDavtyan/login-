import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from "../../models";


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor() {
    const getCurrentUser = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(<string>getCurrentUser);
    this.currentUserSubject = new BehaviorSubject(currentUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const user = {
      id: 1,
      username: username,
      password: password,
      firstName: 'Test',
      lastName: 'Test',
      token: 'Token'
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return of(user)
  }

  register(
    userName: string, password: string, firstName: string, lastName: string
  ) {
    const user = {
      id: 1,
      username: userName,
      password: password,
      firstName: firstName,
      lastName: lastName,
      token: 'Token'
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return of('success');
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

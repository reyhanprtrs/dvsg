import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { tokenGetter } from '../app.module'

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  public canActivate(): boolean {
    if (!tokenGetter()) {
      this.router.navigate(['login']);
      return false;
    }
    return true
  }
}
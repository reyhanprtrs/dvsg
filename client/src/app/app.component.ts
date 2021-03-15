import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tokenGetter } from './app.module'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title="client"

  constructor (private http: HttpClient, private router: Router) {}

  is_logged_in(): boolean {
    if (!tokenGetter()) {
      return true
    }
    return false
  }
}

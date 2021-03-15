import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const base_url = 'http://localhost:3001'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http_client: HttpClient) { }

  login(data): Observable<any> {
    return this.http_client.post(`${base_url}/login`, data)
  }

  login_google(googleUser): Observable<any> {
    return this.http_client.post(`${base_url}/googlelogin`, googleUser)
  }
}

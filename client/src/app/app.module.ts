import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { JwtModule } from '@auth0/angular-jwt'
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login'
import { GoogleLoginProvider } from 'angularx-social-login'

export function tokenGetter() {
  return localStorage.getItem('access_token')
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '310019590987-bvlklbhgurh64h1nab7o7vspt1rn1f7q.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

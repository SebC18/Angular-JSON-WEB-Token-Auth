import { AuthInterceptorService } from './auth-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './manager/manager.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {LoginService} from '../app/shared/login.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    PagenotfoundComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot()
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

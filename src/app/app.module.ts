import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './header/header.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LaravelComponent } from './laravel/laravel.component';
import { AngularComponent } from './angular/angular.component';
import { RjitService } from './rjit.service';
import { Blog1Component } from './blog1/blog1.component';
import { HttpClientModule } from '@angular/common/http';
import { RjitComponent } from './rjit/rjit.component';
import { ApisetupComponent } from './apisetup/apisetup.component';
import { FeeapiService } from './service/feeapi.service';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ApiformComponent } from './apiform/apiform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveformapiComponent } from './reactiveformapi/reactiveformapi.component';
import { ReactiveformService } from './reactiveform.service';
import { ShowidComponent } from './showid/showid.component';
import { EditidComponent } from './editid/editid.component';
import { ShowdataComponent } from './showdata/showdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    LoginComponent,
    PagenotfoundComponent,
    HeaderComponent,
    HtmlComponent,
    CssComponent,
    BootstrapComponent,
    JavascriptComponent,
    LaravelComponent,
    AngularComponent,
    Blog1Component,
    RjitComponent,
    ApisetupComponent,
    ChildComponent,
    FormComponent,
    ApiformComponent,
    ReactiveformComponent,
    ReactiveformapiComponent,
    ShowidComponent,
    EditidComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RjitService,FeeapiService,ReactiveformService],
  bootstrap: [AppComponent]
})
export class AppModule { }

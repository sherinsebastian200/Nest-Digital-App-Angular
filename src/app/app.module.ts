import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNestComponent } from './home-nest/home-nest.component';
import { GalleryNestComponent } from './gallery-nest/gallery-nest.component';
import { ContactNestComponent } from './contact-nest/contact-nest.component';
import { AboutNestComponent } from './about-nest/about-nest.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const myRoute:Routes=[
  {
    path:"",
    component:HomeNestComponent
  },
  {
    path:"gallery",
    component:GalleryNestComponent
  },
  {
    path:"contact",
    component:ContactNestComponent
  },
  {
    path:"about",
    component:AboutNestComponent
  
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeNestComponent,
    GalleryNestComponent,
    ContactNestComponent,
    AboutNestComponent,
    AdminLoginComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

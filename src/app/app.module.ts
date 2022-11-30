import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNestComponent } from './home-nest/home-nest.component';
import { GalleryNestComponent } from './gallery-nest/gallery-nest.component';
import { ContactNestComponent } from './contact-nest/contact-nest.component';
import { AboutNestComponent } from './about-nest/about-nest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNestComponent,
    GalleryNestComponent,
    ContactNestComponent,
    AboutNestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

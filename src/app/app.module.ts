import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RentalComponent } from './pages/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    RentalComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLinkActive,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

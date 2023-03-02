import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RentalComponent } from './pages/rental/rental.component';
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import {DataStorageService} from "./services/data-storage.service";
import {MovieService} from "./services/movie.service";
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import {AuthService} from "./services/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    RentalComponent,
    MovieListComponent,
    CategoriesComponent,
    RegisterComponent,
    LoginComponent,
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        RouterLinkActive,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [DataStorageService, MovieService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

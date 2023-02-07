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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    RentalComponent,
    MovieListComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLinkActive,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataStorageService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

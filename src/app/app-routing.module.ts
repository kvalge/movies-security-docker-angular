import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {MoviesComponent} from "./pages/movies/movies.component";
import {RentalComponent} from "./pages/rental/rental.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {LoginComponent} from "./authentication/login/login.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: "full"},
  {path: 'movies', component: MoviesComponent},
  {path: 'rental', component: RentalComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

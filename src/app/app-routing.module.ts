import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {MoviesComponent} from "./pages/movies/movies.component";
import {RentalComponent} from "./pages/rental/rental.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: "full"},
  {path: 'movies', component: MoviesComponent},
  {path: 'rental', component: RentalComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

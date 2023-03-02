import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {MovieModel} from "../movie.model";
import {MovieService} from "../../../services/movie.service";
import {DataStorageService} from "../../../services/data-storage.service";

declare let jsPDF;
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: MovieModel[];
  headers = ['#', 'Pealkiri', 'Kirjeldus', 'Kategooria']
  showHeader: boolean = false;
  @ViewChild('content', {static: false}) el!: ElementRef;


  constructor(private movieService: MovieService, private dataStorageService: DataStorageService) {
  }

  ngOnInit(): void {
  }

  getAllMovies() {
    this.showHeader = true;
    this.dataStorageService.getAllMovies();
    this.movies = this.movieService.getMovies();
  }

  onCloseList() {
    this.showHeader = false;
  }
}

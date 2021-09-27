import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeService } from 'src/app/services/joke.service';
import { Joke } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  public jokes$: Observable<Array<Joke>>;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokes$ = this.jokeService.jokes;
  }

}

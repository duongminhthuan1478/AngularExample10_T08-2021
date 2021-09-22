import { Component, OnInit } from '@angular/core';
import { LIST_COUNTRY } from 'src/app/shared/MockData/data-mock';
import { Country } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-custom-search-pipe',
  templateUrl: './custom-search-pipe.component.html',
  styleUrls: ['./custom-search-pipe.component.scss']
})


export class CustomSearchPipeComponent implements OnInit {
 
  public searchText: string = "";
  public countries: Country[] = LIST_COUNTRY;

  constructor() { }

  ngOnInit(): void { }

}



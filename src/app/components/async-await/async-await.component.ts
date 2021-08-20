import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  private url = 'https://earthquake.usgs.gov/fdsnws/event/1/application.json';
  constructor(protected http: HttpClient) {

   }

  ngOnInit(): void {

    this.http.get<any>(this.url, ).subscribe(res => {
      console.log(res);
    })
  }

}

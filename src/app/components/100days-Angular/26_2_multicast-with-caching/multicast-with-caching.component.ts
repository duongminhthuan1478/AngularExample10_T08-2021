import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-multicast-with-caching',
  templateUrl: './multicast-with-caching.component.html',
  styleUrls: ['./multicast-with-caching.component.scss']
})
export class MulticastWithCachingComponent implements OnInit {
  isRoot: Observable<boolean>;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isRoot = this.router.events.pipe(
      filter(x => x instanceof NavigationEnd),
      map((x: RouterEvent) => x.url != '/rxjs-multicast')
    );
  }

}

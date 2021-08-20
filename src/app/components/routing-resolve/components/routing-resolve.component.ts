import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-resolve',
  templateUrl: './routing-resolve.component.html',
  styleUrls: ['./routing-resolve.component.css']
})
export class RoutingResolveComponent implements OnInit {

  result;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: any) => {
      console.log('Data :', data);
      this.result = typeof data === 'object' ? JSON.stringify(data) : data.appResolver;
    });
   }

  ngOnInit(): void {
   
  }

  
}


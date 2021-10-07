import { ArticleService } from '../../../../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(public _article: ArticleService, private router: Router) {}

  ngOnInit(): void {}

  public onEditClick(slug) {
    // this.router.navigate(['day_27_28_router', '', 'edit', slug]);
    this.router.navigate(['day_27_28_router/articles/edit', slug]);
  }
}

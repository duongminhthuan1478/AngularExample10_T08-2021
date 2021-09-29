import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Article } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  articles(): Array<Article> {
    return [ 
      {title: 'Money Heist', body: 'Money Heist body', detail: 'này kể về cả nhóm đã ở Ngân hàng Tây Ban Nha hơn 100 giờ và Giáo Sư đang gặp nguy. Tệ hơn nữa, họ sắp phải đối mặt với một kẻ địch mới: quân đội.', slug: 'title-1'},
      {title: 'Squid Game', body: 'Squid Game body', detail: 'Trò chơi con mực là lấy con mực ra chơi ok', slug: 'title-2'}
    ]
  }

  getArticles() {
    return of<Array<Article>>(this.articles());
  }

  findOne(slug: string): Observable<Article> {
    return this.getArticles().pipe(
      map(articles => articles.find(x => x.slug === slug)),
    );
  }
}

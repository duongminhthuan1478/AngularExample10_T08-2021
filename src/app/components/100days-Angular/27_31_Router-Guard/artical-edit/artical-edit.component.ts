import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { pluck, shareReplay, switchMap } from 'rxjs/operators';
import { ArticleService } from 'src/app/services/article.service';
import { ICheckDeactivate } from '../../../../utils/interfaces';

@Component({
  selector: 'app-artical-edit',
  templateUrl: './artical-edit.component.html'
})
export class ArticalEditComponent implements OnInit, ICheckDeactivate {
  form$: Observable<FormGroup>;
  form : FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _article: ArticleService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form$ = this.route.params.pipe(
      pluck('slug'),
      switchMap(slug => this._article.findOne(slug)),
      switchMap(article => of(this.createForm(article))),
      shareReplay(1)
    );
  }

  checkDeactivate(): boolean | Observable<boolean> {
    let isValid: boolean;
    this.form$.subscribe(val => isValid = val.valid)
    return isValid;
  }


  private createForm(article) {
    this.form = this.fb.group({
      title: [article.title, [Validators.required]],
      body: [article.body, [Validators.required]],
      detail: [article.detail, [Validators.required]]
    });
    return this.form;
  }

  public goBack() {
    this.router.navigate(['route-and-guard', 'articles']);
  }
}

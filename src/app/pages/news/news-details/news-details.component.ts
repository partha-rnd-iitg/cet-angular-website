import { Component } from '@angular/core';
import {NEWS_ARTICLES_DATA, NewsArticle} from "../news-data"
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailsComponent {
  article?:  NewsArticle;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article = NEWS_ARTICLES_DATA.find(a => a.id === id);
  }
}



import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NEWS_ARTICLES_DATA, NewsArticle } from "./news-data"
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsArtcileArray : NewsArticle[] = NEWS_ARTICLES_DATA;
}

import { Injectable, Pipe } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';

// MOdel
import { NewsData } from '../../models/news.model';


@Injectable()
export class NewsService {

  public urlApi: string;
  public news: Array<any> = [];

  constructor(public _http: Http) {
     this.urlApi = 'https://www.latercera.com/wp-json/wp/v2/posts/?per_page=20';
   }

  getNews() {
     return this._http.get(this.urlApi)
     .pipe(map(res => res.json() )).subscribe(
        result => {
          result.forEach(element => {
            const data: NewsData = {
              title:  element.title.rendered,
              date: element.date,
              excerpt: element.excerpt.rendered,
              content: element.content.rendered,
              thubnail: element.featured_image_thumbnail_url,
              fullimg: element.featured_image_url,
              showinfo: false
            };
            this.news.push(data);
          });
          
          this.saveNews(this.news);
        },
        error => {
          console.error('Error: ', error);
        }
      );
  }

  
  saveNews(newsInfo: Array<any>) {
    console.log(newsInfo);
    localStorage.setItem('data', JSON.stringify(newsInfo));
  }

  checkLocal() {
      return localStorage.getItem('data');
  }

  setlocalData() {
    this.news =  JSON.parse(this.checkLocal());
  }

  searchData(value: string) {
      if (value === '') {
        this.news = JSON.parse(this.checkLocal());
      } else {
        this.news = this.news.filter(data => data.title.toLowerCase().indexOf(value) >= 0);
      }
  }
}

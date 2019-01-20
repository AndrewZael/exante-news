import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public _news: NewsService) {}

  showHideInfo(index: number) {
    if (this._news.news[index].showinfo) {
      this._news.news[index].showinfo = false;
    } else {
      this._news.news[index].showinfo = true;
    }
   }

  ngOnInit() {
      if (!this._news.checkLocal()) {
          this._news.getNews();
      } else {
          this._news.setlocalData();
      }
  }

}

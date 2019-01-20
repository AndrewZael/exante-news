import { Component, OnInit } from '@angular/core';

// Service news
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private _serviceNews: NewsService ) { }

  ngOnInit() {
  }

  seacrhData(event) {
    const data: string = event.target.value;
    this._serviceNews.searchData(data);
  }

}

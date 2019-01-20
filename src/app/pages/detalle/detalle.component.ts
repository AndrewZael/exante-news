import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Service news
import { NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {
  
  public detalle: Object;

  constructor(private route: ActivatedRoute, private _news: NewsService) { }

  ngOnInit() {
    this._news.setlocalData();
    this.route.params.subscribe(
      params => {
        this.detalle = this._news.news[params.data];
      }
    );
  }

}

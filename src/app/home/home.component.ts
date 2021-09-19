import { Component, OnInit } from '@angular/core';
import { MangaServiceService } from '../services/manga-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mangaList:any = [];

  constructor(private mangaService : MangaServiceService) { }

  ngOnInit(): void {
    this.mangaService.getMangaList().subscribe(data => {
      this.mangaList = data.data;
      console.log(this.mangaList)
    });
  }

}

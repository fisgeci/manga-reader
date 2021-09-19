import { Component, OnInit } from '@angular/core';
import { MangaServiceService } from '../services/manga-service.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-chapters-list',
  templateUrl: './chapters-list.component.html',
  styleUrls: ['./chapters-list.component.css']
})
export class ChaptersListComponent implements OnInit {

  constructor(private mangaService: MangaServiceService, private route: ActivatedRoute) { }

  chaptersList: any = {};

  ngOnInit(): void {
    this.mangaService.getMangaChapters(this.route.snapshot.paramMap.get('id')!!).subscribe(data => {
      this.chaptersList = data.data;
    console.log(this.chaptersList)

    });
  }

}

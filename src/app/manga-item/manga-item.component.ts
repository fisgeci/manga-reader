import { Component, Input, OnInit } from '@angular/core';
import { MangaServiceService } from '../services/manga-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-manga-item',
  templateUrl: './manga-item.component.html',
  styleUrls: ['./manga-item.component.css']
})
export class MangaItemComponent implements OnInit {
  @Input('manga') manga: any = {};

  mangaId: any = '';
  coverId: any = '';
  imageUrl: any = '';
  title: any = {};
  altTitles: any = {};

  constructor(private mangaService: MangaServiceService, private router: Router) { }

  ngOnInit(): void {
    this.mangaId = this.manga.id;
    for (let relationship of this.manga.relationships) {
      if (relationship.type === "cover_art") {
        this.coverId = relationship.id;
      }
    }
    this.mangaService.getCoverArt(this.coverId).subscribe(data => {
      this.imageUrl = "https://uploads.mangadex.org/covers/" + this.mangaId + '/' + data.data.attributes.fileName;
    })
    this.title = this.manga.attributes.title;
    this.altTitles = this.manga.attributes.altTitles[0];
    this.mangaId = this.manga.id;
  }

  navigate(): void {
    this.router.navigate(['manga', this.mangaId])
  }

}

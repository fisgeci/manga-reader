import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaServiceService {

  constructor(private http: HttpClient) { }

  getMangaList(): Observable<any> {
    return this.http.get('https://api.mangadex.org/manga');
  }

  getMangaChapters(id: string): Observable<any> {
  return this.http.get(' https://api.mangadex.org/manga/' + id + '/feed');
  }

  getCoverArt(id: string): Observable<any> {
    return this.http.get('https://api.mangadex.org/cover/' + id);
  }
}

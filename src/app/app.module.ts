import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MangaItemComponent } from './manga-item/manga-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ChaptersListComponent } from './chapters-list/chapters-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MangaItemComponent,
    HomeComponent,
    ChaptersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

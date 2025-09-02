import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bible, Row } from './bible.model';
import { booksOfTheBibleKJV } from './books';
import * as kjv from './data/kjv.json';
// In your main TypeScript entry file
import 'bootstrap/dist/css/bootstrap.min.css';
// In your main TypeScript entry file
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BibleReaderSideNavComponent } from './bible-reader-side-nav/bible-reader-side-nav.component';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BibleReaderToolbarComponent } from './bible-reader-toolbar/bible-reader-toolbar.component';
// import { Field } from './bible.model';

export interface Verse {
  id: number;
  book: number;
  chapter: number;
  verse: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BibleReaderSideNavComponent,
    BibleReaderToolbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bible-reader';

  bible: Bible = <Bible>kjv;
  verses: Row[] = this.bible.resultset.row;

  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIconPacks(fas);
  }

  ngOnInit() {
    console.log(this.bible);
  }

  get transformedVerses() {
    const data: Verse[] = this.verses.map((rawVerse) => ({
      id: rawVerse.field[0],
      book: rawVerse.field[1],
      chapter: rawVerse.field[2],
      verse: rawVerse.field[3],
      text: rawVerse.field[4],
    }));

    return data;
  }

  getBookName(bookNumber: number): string {
    return booksOfTheBibleKJV[bookNumber - 1];
  }
}

import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-bible-reader-scripture-search-bar',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule],
  templateUrl: './bible-reader-scripture-search-bar.component.html',
  styleUrl: './bible-reader-scripture-search-bar.component.scss',
})
export class BibleReaderScriptureSearchBarComponent {
  search(event: any): void {}
}

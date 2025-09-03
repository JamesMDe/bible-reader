import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-bible-page',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './bible-page.component.html',
  styleUrl: './bible-page.component.scss',
})
export class BiblePageComponent {
  pageText: string = `page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ 
  page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ 
  page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ 
  page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ 
  page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ 
  page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ page text will go here. \ `;
}

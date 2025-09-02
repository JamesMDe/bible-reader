import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BibleReaderSidenavService } from '../bible-reader-sidenav-service.service';

@Component({
  selector: 'app-bible-reader-toolbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './bible-reader-toolbar.component.html',
  styleUrl: './bible-reader-toolbar.component.scss',
})
export class BibleReaderToolbarComponent {
  constructor(private sideNavService: BibleReaderSidenavService) {}

  toggleSidenav() {
    this.sideNavService.toggleSideNav();
  }
}

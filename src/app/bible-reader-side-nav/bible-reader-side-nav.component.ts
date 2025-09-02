import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-bible-reader-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './bible-reader-side-nav.component.html',
  styleUrl: './bible-reader-side-nav.component.scss'
})
export class BibleReaderSideNavComponent {
    showFiller = false;
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatNavList,
} from '@angular/material/list';
import {
  MatDrawer,
  MatSidenavModule
} from '@angular/material/sidenav';
import { BibleReaderSidenavService } from '../bible-reader-sidenav-service.service';

export interface SideNavItem {
  id: number;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-bible-reader-side-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatNavList,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    MatIconModule,
  ],
  templateUrl: './bible-reader-side-nav.component.html',
  styleUrl: './bible-reader-side-nav.component.scss',
})
export class BibleReaderSideNavComponent implements AfterViewInit {
  @ViewChild('drawer') drawer!: MatDrawer;

  menuItems: SideNavItem[] = [
    { id: 1, label: 'Home', icon: 'home' },
    { id: 2, label: 'Read', icon: 'book' },
    { id: 3, label: 'Notes', icon: 'notes' },
  ];

  showFiller: boolean = false;

  constructor(private sideNavService: BibleReaderSidenavService) {}

  ngAfterViewInit(): void {
    this.sideNavService.toggle$.subscribe(() => {
      this.drawer.toggle();
    });
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BibleReaderSidenavService {
  private toggleSubject = new Subject<void>();
  toggle$ = this.toggleSubject.asObservable();

  toggleSideNav(): void {
    this.toggleSubject.next();
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleReaderToolbarComponent } from './bible-reader-toolbar.component';

describe('BibleReaderToolbarComponent', () => {
  let component: BibleReaderToolbarComponent;
  let fixture: ComponentFixture<BibleReaderToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleReaderToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BibleReaderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

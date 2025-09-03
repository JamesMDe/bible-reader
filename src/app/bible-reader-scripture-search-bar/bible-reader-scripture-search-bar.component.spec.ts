import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleReaderScriptureSearchBarComponent } from './bible-reader-scripture-search-bar.component';

describe('BibleReaderScriptureSearchBarComponent', () => {
  let component: BibleReaderScriptureSearchBarComponent;
  let fixture: ComponentFixture<BibleReaderScriptureSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleReaderScriptureSearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BibleReaderScriptureSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

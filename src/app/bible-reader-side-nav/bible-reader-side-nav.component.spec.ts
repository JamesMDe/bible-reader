import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleReaderSideNavComponent } from './bible-reader-side-nav.component';

describe('BibleReaderSideNavComponent', () => {
  let component: BibleReaderSideNavComponent;
  let fixture: ComponentFixture<BibleReaderSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleReaderSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibleReaderSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

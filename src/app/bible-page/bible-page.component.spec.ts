import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblePageComponent } from './bible-page.component';

describe('BiblePageComponent', () => {
  let component: BiblePageComponent;
  let fixture: ComponentFixture<BiblePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiblePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BiblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

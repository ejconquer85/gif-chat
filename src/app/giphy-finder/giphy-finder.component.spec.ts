import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyFinderComponent } from './giphy-finder.component';

describe('GiphyFinderComponent', () => {
  let component: GiphyFinderComponent;
  let fixture: ComponentFixture<GiphyFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

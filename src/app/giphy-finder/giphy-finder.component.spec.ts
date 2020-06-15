import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";



import { GiphyFinderComponent } from './giphy-finder.component';

describe('GiphyFinderComponent', () => {
  let component: GiphyFinderComponent;
  let fixture: ComponentFixture<GiphyFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyFinderComponent ],
      imports: 
      [
        HttpClientModule,
        MatDialogModule
      ],
      providers: 
      [
        HttpClient,
        { provide: MatDialogRef, useValue: {} }
      ]
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

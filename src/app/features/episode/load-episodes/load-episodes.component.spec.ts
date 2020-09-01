import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadEpisodesComponent } from './load-episodes.component';

describe('LoadEpisodesComponent', () => {
  let component: LoadEpisodesComponent;
  let fixture: ComponentFixture<LoadEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

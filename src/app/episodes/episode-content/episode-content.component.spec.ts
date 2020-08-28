import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeContentComponent } from './episode-content.component';

describe('EpisodeContentComponent', () => {
  let component: EpisodeContentComponent;
  let fixture: ComponentFixture<EpisodeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

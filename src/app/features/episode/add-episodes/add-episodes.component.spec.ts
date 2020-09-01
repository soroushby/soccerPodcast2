import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEpisodesComponent } from './add-episodes.component';

describe('AddEpisodesComponent', () => {
  let component: AddEpisodesComponent;
  let fixture: ComponentFixture<AddEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

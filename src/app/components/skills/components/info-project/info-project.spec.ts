import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProject } from './info-project';

describe('InfoProject', () => {
  let component: InfoProject;
  let fixture: ComponentFixture<InfoProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

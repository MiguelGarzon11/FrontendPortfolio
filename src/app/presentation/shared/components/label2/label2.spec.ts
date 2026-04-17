import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Label2 } from './label2';

describe('Label2', () => {
  let component: Label2;
  let fixture: ComponentFixture<Label2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Label2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Label2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

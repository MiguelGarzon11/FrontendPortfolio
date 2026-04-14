import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincard } from './maincard';

describe('Maincard', () => {
  let component: Maincard;
  let fixture: ComponentFixture<Maincard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maincard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maincard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

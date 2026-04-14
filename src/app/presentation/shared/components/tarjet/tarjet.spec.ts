import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjet } from './tarjet';

describe('Tarjet', () => {
  let component: Tarjet;
  let fixture: ComponentFixture<Tarjet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarjet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarjet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

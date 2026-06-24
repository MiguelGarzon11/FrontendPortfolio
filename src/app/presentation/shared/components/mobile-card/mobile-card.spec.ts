import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCard } from './mobile-card';

describe('MobileCard', () => {
  let component: MobileCard;
  let fixture: ComponentFixture<MobileCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GianComponent } from './gian.component';

describe('GianComponent', () => {
  let component: GianComponent;
  let fixture: ComponentFixture<GianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

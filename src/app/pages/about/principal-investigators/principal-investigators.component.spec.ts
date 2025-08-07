import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalInvestigatorsComponent } from './principal-investigators.component';

describe('PrincipalInvestigatorsComponent', () => {
  let component: PrincipalInvestigatorsComponent;
  let fixture: ComponentFixture<PrincipalInvestigatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalInvestigatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalInvestigatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

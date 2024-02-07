import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDetailsComponent } from './details-details.component';

describe('DetailsDetailsComponent', () => {
  let component: DetailsDetailsComponent;
  let fixture: ComponentFixture<DetailsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

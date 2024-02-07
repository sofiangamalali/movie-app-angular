import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRecomindComponent } from './details-recomind.component';

describe('DetailsRecomindComponent', () => {
  let component: DetailsRecomindComponent;
  let fixture: ComponentFixture<DetailsRecomindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsRecomindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsRecomindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

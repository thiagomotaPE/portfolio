import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudationComponent } from '../saudation.component';

describe('SaudationComponent', () => {
  let component: SaudationComponent;
  let fixture: ComponentFixture<SaudationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaudationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaudationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsWindowComponent } from '../options-window.component';

describe('OptionsWindowComponent', () => {
  let component: OptionsWindowComponent;
  let fixture: ComponentFixture<OptionsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

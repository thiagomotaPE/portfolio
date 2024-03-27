import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMidiasComponent } from '../social-midias.component';

describe('SocialMidiasComponent', () => {
  let component: SocialMidiasComponent;
  let fixture: ComponentFixture<SocialMidiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMidiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialMidiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

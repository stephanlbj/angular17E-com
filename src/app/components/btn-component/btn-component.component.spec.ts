import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComponentComponent } from './btn-component.component';

describe('BtnComponentComponent', () => {
  let component: BtnComponentComponent;
  let fixture: ComponentFixture<BtnComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

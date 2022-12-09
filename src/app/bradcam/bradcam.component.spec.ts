import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradcamComponent } from './bradcam.component';

describe('BradcamComponent', () => {
  let component: BradcamComponent;
  let fixture: ComponentFixture<BradcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BradcamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BradcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

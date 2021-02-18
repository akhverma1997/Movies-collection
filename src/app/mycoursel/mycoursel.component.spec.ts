import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycourselComponent } from './mycoursel.component';

describe('MycourselComponent', () => {
  let component: MycourselComponent;
  let fixture: ComponentFixture<MycourselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycourselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycourselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

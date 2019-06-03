import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGabeComponent } from './about-gabe.component';

describe('AboutGabeComponent', () => {
  let component: AboutGabeComponent;
  let fixture: ComponentFixture<AboutGabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutGabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

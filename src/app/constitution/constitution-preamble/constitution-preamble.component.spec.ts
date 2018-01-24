import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionPreambleComponent } from './constitution-preamble.component';

describe('ConstitutionPreambleComponent', () => {
  let component: ConstitutionPreambleComponent;
  let fixture: ComponentFixture<ConstitutionPreambleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstitutionPreambleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstitutionPreambleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

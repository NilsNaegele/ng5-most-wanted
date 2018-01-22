import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionDetailComponent } from './constitution-detail.component';

describe('ConstitutionDetailComponent', () => {
  let component: ConstitutionDetailComponent;
  let fixture: ComponentFixture<ConstitutionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstitutionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstitutionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

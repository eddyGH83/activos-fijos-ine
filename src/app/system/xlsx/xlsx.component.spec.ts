import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XlsxComponent } from './xlsx.component';

describe('XlsxComponent', () => {
  let component: XlsxComponent;
  let fixture: ComponentFixture<XlsxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XlsxComponent]
    });
    fixture = TestBed.createComponent(XlsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

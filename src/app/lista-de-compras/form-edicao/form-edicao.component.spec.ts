import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdicaoComponent } from './form-edicao.component';

describe('FormEdicaoComponent', () => {
  let component: FormEdicaoComponent;
  let fixture: ComponentFixture<FormEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEdicaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

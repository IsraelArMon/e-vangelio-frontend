import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreyenteFormComponent } from './creyente-form.component';

describe('CreyenteFormComponent', () => {
  let component: CreyenteFormComponent;
  let fixture: ComponentFixture<CreyenteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreyenteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreyenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

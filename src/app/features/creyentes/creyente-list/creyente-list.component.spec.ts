import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreyenteListComponent } from './creyente-list.component';

describe('CreyenteListComponent', () => {
  let component: CreyenteListComponent;
  let fixture: ComponentFixture<CreyenteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreyenteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreyenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

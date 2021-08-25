import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialComponent } from './inicial.component';

describe('InicialComponent', () => {
  let component: InicialComponent;
  let fixture: ComponentFixture<InicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFruitComponent } from './create-fruit.component';

describe('CreateFruitComponent', () => {
  let component: CreateFruitComponent;
  let fixture: ComponentFixture<CreateFruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarimagensComponent } from './editarimagens.component';

describe('EditarimagensComponent', () => {
  let component: EditarimagensComponent;
  let fixture: ComponentFixture<EditarimagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarimagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarimagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

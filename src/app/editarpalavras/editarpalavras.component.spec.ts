import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpalavrasComponent } from './editarpalavras.component';

describe('EditarpalavrasComponent', () => {
  let component: EditarpalavrasComponent;
  let fixture: ComponentFixture<EditarpalavrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarpalavrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarpalavrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

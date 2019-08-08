import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRegistradoComponent } from './no-registrado.component';

describe('NoRegistradoComponent', () => {
  let component: NoRegistradoComponent;
  let fixture: ComponentFixture<NoRegistradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoRegistradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

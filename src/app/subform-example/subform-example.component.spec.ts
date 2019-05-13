import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubformExampleComponent } from './subform-example.component';

describe('SubformExampleComponent', () => {
  let component: SubformExampleComponent;
  let fixture: ComponentFixture<SubformExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubformExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubformExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

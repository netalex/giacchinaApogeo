import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirStructComponent } from './dir-struct.component';

describe('DirStructComponent', () => {
  let component: DirStructComponent;
  let fixture: ComponentFixture<DirStructComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirStructComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirStructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

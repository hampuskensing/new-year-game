/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PickFourComponent } from './pick-four.component';

describe('PickFourComponent', () => {
  let component: PickFourComponent;
  let fixture: ComponentFixture<PickFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

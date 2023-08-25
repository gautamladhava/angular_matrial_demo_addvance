import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgreseComponent } from './progrese.component';

describe('ProgreseComponent', () => {
  let component: ProgreseComponent;
  let fixture: ComponentFixture<ProgreseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgreseComponent]
    });
    fixture = TestBed.createComponent(ProgreseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

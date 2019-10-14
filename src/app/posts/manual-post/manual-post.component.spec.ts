import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPostComponent } from './manual-post.component';

describe('ManualPostComponent', () => {
  let component: ManualPostComponent;
  let fixture: ComponentFixture<ManualPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

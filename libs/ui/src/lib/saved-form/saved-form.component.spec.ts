import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFormComponent } from './saved-form.component';

describe('SavedFormComponent', () => {
  let component: SavedFormComponent;
  let fixture: ComponentFixture<SavedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

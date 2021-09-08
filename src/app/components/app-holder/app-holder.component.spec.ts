import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHolderComponent } from './app-holder.component';

describe('AppHolderComponent', () => {
  let component: AppHolderComponent;
  let fixture: ComponentFixture<AppHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReaderComponent } from './create-reader.component';

describe('CreateReaderComponent', () => {
  let component: CreateReaderComponent;
  let fixture: ComponentFixture<CreateReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReaderComponent]
    });
    fixture = TestBed.createComponent(CreateReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

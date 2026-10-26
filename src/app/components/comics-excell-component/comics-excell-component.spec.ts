import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicsExcellComponent } from './comics-excell-component';

describe('ComicsExcellComponent', () => {
  let component: ComicsExcellComponent;
  let fixture: ComponentFixture<ComicsExcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsExcellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsExcellComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

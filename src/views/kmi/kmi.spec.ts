import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMI } from './kmi';

describe('KMI', () => {
  let component: KMI;
  let fixture: ComponentFixture<KMI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KMI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KMI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

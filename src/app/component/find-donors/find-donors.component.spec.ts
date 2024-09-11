import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDonorsComponent } from './find-donors.component';

describe('FindDonorsComponent', () => {
  let component: FindDonorsComponent;
  let fixture: ComponentFixture<FindDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDonorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

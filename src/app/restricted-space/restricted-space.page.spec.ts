import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestrictedSpacePage } from './restricted-space.page';

describe('RestrictedSpacePage', () => {
  let component: RestrictedSpacePage;
  let fixture: ComponentFixture<RestrictedSpacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestrictedSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

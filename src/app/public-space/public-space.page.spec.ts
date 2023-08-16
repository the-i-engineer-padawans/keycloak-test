import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicSpacePage } from './public-space.page';

describe('PublicSpacePage', () => {
  let component: PublicSpacePage;
  let fixture: ComponentFixture<PublicSpacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PublicSpacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSectionComponent } from './blog-post-section.component';

describe('BlogPostSectionComponent', () => {
  let component: BlogPostSectionComponent;
  let fixture: ComponentFixture<BlogPostSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

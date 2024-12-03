import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBanComponent } from './blog-ban.component';

describe('BlogBanComponent', () => {
  let component: BlogBanComponent;
  let fixture: ComponentFixture<BlogBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogBanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

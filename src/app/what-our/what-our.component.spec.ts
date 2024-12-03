import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOurComponent } from './what-our.component';

describe('WhatOurComponent', () => {
  let component: WhatOurComponent;
  let fixture: ComponentFixture<WhatOurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatOurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatOurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

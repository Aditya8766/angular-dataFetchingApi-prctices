import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantComponentComponent } from './tenant-component.component';

describe('TenantComponentComponent', () => {
  let component: TenantComponentComponent;
  let fixture: ComponentFixture<TenantComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantComponentComponent]
    });
    fixture = TestBed.createComponent(TenantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

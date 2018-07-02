import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoPageComponent } from './manutencao-page.component';

describe('ManutencaoPageComponent', () => {
  let component: ManutencaoPageComponent;
  let fixture: ComponentFixture<ManutencaoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

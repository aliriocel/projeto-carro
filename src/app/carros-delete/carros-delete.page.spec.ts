import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrosDeletePage } from './carros-delete.page';

describe('CarrosDeletePage', () => {
  let component: CarrosDeletePage;
  let fixture: ComponentFixture<CarrosDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

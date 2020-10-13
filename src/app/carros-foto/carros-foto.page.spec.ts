import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrosFotoPage } from './carros-foto.page';

describe('CarrosFotoPage', () => {
  let component: CarrosFotoPage;
  let fixture: ComponentFixture<CarrosFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosFotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

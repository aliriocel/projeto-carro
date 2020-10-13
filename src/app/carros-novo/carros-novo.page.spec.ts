import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrosNovoPage } from './carros-novo.page';

describe('CarrosNovoPage', () => {
  let component: CarrosNovoPage;
  let fixture: ComponentFixture<CarrosNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

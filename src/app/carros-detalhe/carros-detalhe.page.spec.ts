import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrosDetalhePage } from './carros-detalhe.page';

describe('CarrosDetalhePage', () => {
  let component: CarrosDetalhePage;
  let fixture: ComponentFixture<CarrosDetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosDetalhePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

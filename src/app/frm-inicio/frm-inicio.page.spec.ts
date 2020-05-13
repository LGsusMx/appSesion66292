import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrmInicioPage } from './frm-inicio.page';

describe('FrmInicioPage', () => {
  let component: FrmInicioPage;
  let fixture: ComponentFixture<FrmInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmInicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrmInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

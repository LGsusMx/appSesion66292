import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjetoAlteracionPage } from './objeto-alteracion.page';

describe('ObjetoAlteracionPage', () => {
  let component: ObjetoAlteracionPage;
  let fixture: ComponentFixture<ObjetoAlteracionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetoAlteracionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObjetoAlteracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

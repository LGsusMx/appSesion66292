import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LetrasPage } from './letras.page';

describe('LetrasPage', () => {
  let component: LetrasPage;
  let fixture: ComponentFixture<LetrasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetrasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LetrasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CovidGeneralPage } from './covid-general.page';

describe('CovidGeneralPage', () => {
  let component: CovidGeneralPage;
  let fixture: ComponentFixture<CovidGeneralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidGeneralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CovidGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

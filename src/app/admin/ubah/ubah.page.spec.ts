import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UbahPage } from './ubah.page';

describe('UbahPage', () => {
  let component: UbahPage;
  let fixture: ComponentFixture<UbahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UbahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

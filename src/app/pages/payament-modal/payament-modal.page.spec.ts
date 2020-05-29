import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayamentModalPage } from './payament-modal.page';

describe('PayamentModalPage', () => {
  let component: PayamentModalPage;
  let fixture: ComponentFixture<PayamentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayamentModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayamentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItinerarydetailsPage } from './itinerarydetails.page';

describe('ItinerarydetailsPage', () => {
  let component: ItinerarydetailsPage;
  let fixture: ComponentFixture<ItinerarydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItinerarydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

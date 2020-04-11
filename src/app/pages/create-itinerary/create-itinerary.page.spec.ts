import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateItineraryPage } from './create-itinerary.page';

describe('CreateItineraryPage', () => {
  let component: CreateItineraryPage;
  let fixture: ComponentFixture<CreateItineraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateItineraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateItineraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceActivitiesPage } from './place-activities.page';

describe('PlaceActivitiesPage', () => {
  let component: PlaceActivitiesPage;
  let fixture: ComponentFixture<PlaceActivitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceActivitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceActivitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

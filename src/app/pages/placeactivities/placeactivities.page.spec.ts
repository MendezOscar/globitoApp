import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlaceactivitiesPage } from './placeactivities.page';

describe('PlaceactivitiesPage', () => {
  let component: PlaceactivitiesPage;
  let fixture: ComponentFixture<PlaceactivitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceactivitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceactivitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

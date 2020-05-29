import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./pages/tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'travelinfo',
    loadChildren: () => import('./pages/travelinfo/travelinfo.module').then( m => m.TravelinfoPageModule)
  },
  {
    path: 'register-preferences',
    loadChildren: () => import('./pages/register-preferences/register-preferences.module').then( m => m.RegisterPreferencesPageModule)
  },
  {
    path: 'create-itinerary',
    loadChildren: () => import('./pages/create-itinerary/create-itinerary.module').then( m => m.CreateItineraryPageModule)
  },
  {
    path: 'itinerary-details',
    loadChildren: () => import('./pages/itinerary-details/itinerary-details.module').then( m => m.ItineraryDetailsPageModule)
  },
  {
    path: 'place-activities',
    loadChildren: () => import('./pages/place-activities/place-activities.module').then( m => m.PlaceActivitiesPageModule)
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./pages/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },  {
    path: 'activity-detail',
    loadChildren: () => import('./pages/activity-detail/activity-detail.module').then( m => m.ActivityDetailPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

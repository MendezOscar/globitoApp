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
  },  {
    path: 'itinerarydetails',
    loadChildren: () => import('./pages/itinerarydetails/itinerarydetails.module').then( m => m.ItinerarydetailsPageModule)
  },
  {
    path: 'placeactivities',
    loadChildren: () => import('./pages/placeactivities/placeactivities.module').then( m => m.PlaceactivitiesPageModule)
  },
  {
    path: 'recommendations',
    loadChildren: () => import('./pages/recommendations/recommendations.module').then( m => m.RecommendationsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

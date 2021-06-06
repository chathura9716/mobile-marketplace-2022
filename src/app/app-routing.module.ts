import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    //canActivate:[AuthGuard]
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'my-listings',
  //   loadChildren: () => import('./pages/my-listings/my-listings.module').then( m => m.MyListingsPageModule)
  // },
  // {
  //   path: 'my-listings-add',
  //   loadChildren: () => import('./pages/my-listings-add/my-listings-add.module').then( m => m.MyListingsAddPageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'update-note/:id',
    loadChildren: () => import('./update-note/update-note.module').then( m => m.UpdateNotePageModule)
  },
  {
    path: 'editpage',
    loadChildren: () => import('./pages/editpage/editpage.module').then( m => m.EditpagePageModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./pages/listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'view2/:id',
    loadChildren: () => import('./view2/view2.module').then( m => m.View2PageModule)
  },
  {
    path: 'update-note2/:id',
    loadChildren: () => import('./update-note2/update-note2.module').then( m => m.UpdateNote2PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

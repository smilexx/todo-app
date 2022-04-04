import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'profile',
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
}, {
  path: 'login',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

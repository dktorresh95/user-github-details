import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user/:username',
    loadChildren: () =>
      import('./user-details/user-details.module').then(m => m.UserDetailsModule)
  },
  {
    path: 'followers/:username',
    loadChildren: () =>
      loadRemoteModule({
        type: "module",
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './FollowersModule'
      }).then(m => m.FollowersModule)  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './game/components/error/error.component';

const routes: Routes = [
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then( m => m.GameModule)
  },
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

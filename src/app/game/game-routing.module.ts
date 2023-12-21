import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { GameComponent } from './components/game/game.component';
import { PlayerGuard } from '../core/guards/player.guard';

const routes: Routes = [
  { path: '', component: PlayerComponent },
  { path: 'play', component: GameComponent, canActivate: [PlayerGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }

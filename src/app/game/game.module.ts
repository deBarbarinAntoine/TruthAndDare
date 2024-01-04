import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './components/game/game.component';
import { IonicModule } from '@ionic/angular';
import { EndComponent } from './components/end/end.component';


@NgModule({
  declarations: [PlayerComponent, GameComponent, EndComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})
export class GameModule { }

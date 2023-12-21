import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models/player';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
})
export class EndComponent  implements OnInit {

  protected winner: Player = this.gameService.players[0];

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit() {
    for(const player of this.gameService.players) {
      if (player.score > this.winner.score) {
        this.winner = player;
      }
    }
  }

}

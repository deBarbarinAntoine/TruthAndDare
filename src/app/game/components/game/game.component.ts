import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Challenge } from 'src/app/core/models/challenge';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent  implements OnInit {

  protected challenge: Challenge = this.gameService.getChallenge();

  constructor(
    protected gameService: GameService,
    private router: Router,
  ) { }

  ngOnInit() { }

  unvalidate() {
    this.nextChallenge();
  }

  validate(score: number) {
    this.gameService.gainScore(score);
    this.nextChallenge();
  }

  nextChallenge() {
    if (this.gameService.checkEnd()) {
      this.router.navigate(['/game/end']);
    }
    this.challenge = this.gameService.getChallenge();
    this.gameService.setProgress();
  }
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game/services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(
    private location: Location,
    private gameService: GameService
  ) { }

  ngOnInit() {}

  backButton() {
    this.location.back();
    this.gameService.replay();
  }

}

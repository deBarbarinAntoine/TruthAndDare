import { Injectable } from '@angular/core';
import { Player } from 'src/app/core/models/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public players: Player[] = JSON.parse(localStorage.getItem('players') || '[]');

  constructor() { }

  initializePlayers(playersName: any[]) {
    this.players = [];
    playersName.forEach((name: string) => {
      const newPlayer = Player.create(name, 0);
      this.players.push(newPlayer);
    })
    localStorage.setItem('players', JSON.stringify(this.players));
    console.log(this.players);
  }
}

import { Injectable } from '@angular/core';
import { Player } from 'src/app/core/models/player';

import jsonChallenge from '../../../assets/data/data.json';
import { Challenge, ChallengeProps } from 'src/app/core/models/challenge';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public progress: number = 0;
  public players: Player[] = JSON.parse(localStorage.getItem('players') || '[]');
  public challenges: Challenge[] = jsonChallenge.map((challengeProps: ChallengeProps) => Challenge.create(challengeProps));
  public playerTurn: number = 0;
  public challengesDone: Challenge[] = [];
  private end: number = 5;

  constructor() { }

  setProgress() {
    this.progress = this.challengesDone.length / this.end;
  }

  initializePlayers(playersName: any[]) {
    this.players = [];
    playersName.forEach((name: string) => {
      const newPlayer = Player.create(name, 0);
      this.players.push(newPlayer);
    })
    localStorage.setItem('players', JSON.stringify(this.players));
    console.log(this.players);
  }

  checkEnd(): boolean {
    return this.challengesDone.length >= this.end;
  }

  getChallenge(): Challenge {
    this.playerTurn = (this.playerTurn + 1) % this.players.length;
    const player1 = this.players[this.playerTurn];
    const player2 = this.playerTurn === 0 ? this.players[1] : this.players[0];
    let challenge = this.shuffleChallenges(this.challenges).find((challenge: Challenge) => !this.isChallengeDone(challenge));
    if (challenge && player1.name && player2.name) {
      this.challengesDone.push(challenge);
      challenge.updateDescription(player1.name, player2.name);
      return challenge
    } else {
      throw new Error("No challenge available!");
    }
  }

  private isChallengeDone(challenge: Challenge): boolean {
    return this.challengesDone.some((challengeDone) => challengeDone.props.id === challenge.props.id);
  }

  gainScore(score: number) {
    this.players[this.playerTurn].score += score;
    console.log(this.players[this.playerTurn].name, ": ", this.players[this.playerTurn].score, "pts");
  }

  shuffleChallenges(array: Challenge[]): Challenge[] {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array
  }
  
  replay() {
    this.challengesDone = [];
    this.playerTurn = 0;
    this.progress = 0;
    this.players.forEach((player: Player) => {
      player.score = 0;
    });
  }
}

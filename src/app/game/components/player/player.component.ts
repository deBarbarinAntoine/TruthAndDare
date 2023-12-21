import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  protected playersForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.playersForm = this.formBuilder.group({
      player1: [this.gameService.players[0] ? this.gameService.players[0].name : null, [Validators.required, Validators.minLength(3)]],
      player2: [this.gameService.players[1] ? this.gameService.players[1].name : null, [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    console.log("Length of player1's name: ", this.playersForm.get('player1')?.value.length);
    console.log("Length of player2's name: ", this.playersForm.get('player2')?.value.length);
    if (this.playersForm.valid && ((this.playersForm.get('player1') ? true : false && this.playersForm.get('player2') ? true : false ) && (this.playersForm.get('player1')?.value != this.playersForm.get('player2')?.value))) {
      const players = [this.playersForm.get('player1')?.value, this.playersForm.get('player2')?.value];
      this.gameService.initializePlayers(players);
      console.log(players);
      this.router.navigate(['/game/play']);
    } else {
      console.log("Invalid form");
      var message: string = "";
      if (this.playersForm.get('player1')?.value.length < 3 || this.playersForm.get('player2')?.value.length < 3) {
        message = "Player names must be at least 3 characters long.";
      }
      if (this.playersForm.get('player1')?.value == this.playersForm.get('player2')?.value) {
      message += "\nPlayer names must be different!";
      }
      this.alertService.displayAlert("Error", message);
    }
  }

}

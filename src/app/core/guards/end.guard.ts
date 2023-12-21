import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/game/services/game.service';

@Injectable({
  providedIn: 'root'
})
export class EndGuard {
  constructor(private gameService: GameService) { }
  canActivate(): boolean {
    return this.gameService.checkEnd();
  }
  
}

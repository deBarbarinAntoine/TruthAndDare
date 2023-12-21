import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GameService } from 'src/app/game/services/game.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerGuard {
  constructor(private gameService: GameService, private router: Router) { }
  canActivate(): boolean {
    const isAllowed = this.gameService.players.length >= 2;
    if (!isAllowed) {
      this.router.navigate(['/game']);
    }
    return isAllowed;
  }
  
}

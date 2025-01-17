import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game/game-board.component';
import { GameConsoleComponent } from './game/game-console.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { GameService } from './game/game.service';
import { KingComponent } from './game/king.component';
import { PawnComponent } from './game/pawn.component';
import { SpaceComponent } from './game/space.component';
import {CheckersService} from './game/checkers.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameBoardComponent,
    GameConsoleComponent,
    SpaceComponent,
    PawnComponent,
    KingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameService, CheckersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EquipeComponent } from './Views/Equipes/ListeEquipe/equipe.component';
import {HttpClientModule} from "@angular/common/http";
import { NewTeamComponent } from './Views/Equipes/new-team/new-team.component';
import {FormsModule} from "@angular/forms";
import { DetailEquipeComponent } from './Views/Equipes/detail-equipe/detail-equipe.component';
import { UpdateEquipeComponent } from './Views/Equipes/update-equipe/update-equipe.component';
import { AjoutJoueurComponent } from './Views/Joueurs/ajout-joueur/ajout-joueur.component';
import { UpdateJoueursComponent } from './Views/Joueurs/update-joueurs/update-joueurs.component';
import { HomeComponent } from './Views/home/home.component';
import { CardEquipeComponent } from './Composant/card-equipe/card-equipe.component';
import { AddTeamModalComponent } from './Composant/add-team-modal/add-team-modal.component';
import { ToastComponent } from './Composant/toast/toast.component';
import { NewMatchComponent } from './Views/Match/new-match/new-match.component';
import { DebutMatchComponent } from './Views/Match/debut-match/debut-match.component';
import { HistoriqueComponent } from './Views/Match/historique/historique.component';
import { CardMatchComponent } from './Composant/card-match/card-match.component';
import { NavBarComponent } from './Views/nav-bar/nav-bar.component';
import { StatsModalComponent } from './Composant/stats-modal/stats-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    NewTeamComponent,
    DetailEquipeComponent,
    UpdateEquipeComponent,
    AjoutJoueurComponent,
    UpdateJoueursComponent,
    HomeComponent,
    CardEquipeComponent,
    AddTeamModalComponent,
    ToastComponent,
    NewMatchComponent,
    DebutMatchComponent,
    HistoriqueComponent,
    CardMatchComponent,
    NavBarComponent,
    StatsModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

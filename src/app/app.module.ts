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
import { MatchComponent } from './Views/match/match.component';
import { HomeComponent } from './Views/home/home.component';
import { CardEquipeComponent } from './Composant/card-equipe/card-equipe.component';
import { AddTeamModalComponent } from './Composant/add-team-modal/add-team-modal.component';
import { ToastComponent } from './Composant/toast/toast.component';




@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    NewTeamComponent,
    DetailEquipeComponent,
    UpdateEquipeComponent,
    AjoutJoueurComponent,
    UpdateJoueursComponent,
    MatchComponent,
    HomeComponent,
    CardEquipeComponent,
    AddTeamModalComponent,
    ToastComponent,
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

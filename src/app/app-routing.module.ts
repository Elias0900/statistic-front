import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquipeComponent} from "./Views/Equipes/ListeEquipe/equipe.component";
import {NewTeamComponent} from "./Views/Equipes/new-team/new-team.component";
import {DetailEquipeComponent} from "./Views/Equipes/detail-equipe/detail-equipe.component";
import {UpdateEquipeComponent} from "./Views/Equipes/update-equipe/update-equipe.component";
import {AjoutJoueurComponent} from "./Views/Joueurs/ajout-joueur/ajout-joueur.component";
import {UpdateJoueursComponent} from "./Views/Joueurs/update-joueurs/update-joueurs.component";
import {HomeComponent} from "./Views/home/home.component";
import {NewMatchComponent} from "./Views/Match/new-match/new-match.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  /** Equipe **/
  {path: 'equipe', component: EquipeComponent},
  {path: 'new-team', component: NewTeamComponent},
  {path: 'detail-equipe/:id', component: DetailEquipeComponent},
  {path: 'update-equipe/:id', component: UpdateEquipeComponent},

  /** Joueurs **/
  {path: "ajout-joueurs/:id", component: AjoutJoueurComponent},
  {path: "update-joueurs/:joueurid", component: UpdateJoueursComponent},


  /** Match **/
  {path: "new-match", component: NewMatchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

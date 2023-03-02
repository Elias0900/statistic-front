import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipeComponent} from "./Views/Equipes/ListeEquipe/equipe.component";
import {NewTeamComponent} from "./Views/Equipes/new-team/new-team.component";
import {DetailEquipeComponent} from "./Views/Equipes/detail-equipe/detail-equipe.component";
import {UpdateEquipeComponent} from "./Views/Equipes/update-equipe/update-equipe.component";

const routes: Routes = [
  {path: 'equipe', component: EquipeComponent},
  {path: 'new-team', component: NewTeamComponent},
  {path: 'detail-equipe/:id', component: DetailEquipeComponent},
  {path: 'update-equipe/:id', component: UpdateEquipeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

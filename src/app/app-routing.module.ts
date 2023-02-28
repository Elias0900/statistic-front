import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipeComponent} from "./Views/equipe/equipe.component";

const routes: Routes = [
  {path: 'equipe', component: EquipeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EquipeModele} from "../Modele/equipe.modele";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class EquipeServiceService {
  apiURL = 'http://localhost:9393/api/equipe';



  constructor(private http: HttpClient) { }


  ajourEquipe(e: EquipeModele){
    return this.http.post(this.apiURL, e, httpOptions)
  }



}

import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// obligatoire uniquement quand on injecte dans le constructeur d'un service un autre service,
// par convention il est préférable qu'il soit toujours là.
@Injectable()

export class HikeService {

  constructor(private _http:Http) {}

  //getHikes() {
  // return this.hikes;
  //}

  // Utilisation d'observable (flux de donnée qui arrive dans le temps)
  getHikesFromAPI() {
    return this._http.get('app/api/hikes.json')
        .do(x => console.log(x))
        .map(hikes => hikes.json());
  }
}

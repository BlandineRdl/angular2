import {Injectable} from "@angular/core";
import { Hike } from './hike';

// obligatoire uniquement quand on injecte dans le constructeur d'un service un autre service,
// par convention il est préférable qu'il soit toujours là.
@Injectable()

export class HikeService {
  hikes: Hike[] = [
    {
      "name": "Saint-Aubun-du-Cormier",
      "region": "Bretagne",
      "area": "Ille-et-Vilaine",
      "startingPoint": "Plan d'eau",
      "distance": 12.8,
      "distanceUnit": "km",
      "duration": 240,
      "heightDifference": 267,
      "description": "Randonnée sympa, à démarrer par le plan d'eau pour finir sur les hauteurs de Saint Aubin. Rochers imposants et des arbres magnifiques sont effectivement au rendez-vous. Bonne balade",
      "evaluation": [4, 5, 3]
    },
    {
      "name": "Vallée du Couesnon",
      "region": "Bretagne",
      "area": "Ille-et-Vilaine",
      "startingPoint": "Château de la ville olivier",
      "distance": 15.6,
      "distanceUnit": "km",
      "duration": 270,
      "heightDifference": 200,
      "description": "Il faut être en forme pour cette rando car il y a beaucoup de dénivelés. Mais le jeu en vaut la chandelle car admirer les bords du Couesnon est un régal. Bonne randonnée ",
      "evaluation": [5, 5]
    }
  ]

  getHikes() {
    return this.hikes;
  }
}

import { Component } from "@angular/core";
import { Hike } from './hike';
import { HikeService } from "./hike.service";

@Component({
  moduleId : module.id,
  selector: 'cc-hike-list',
  templateUrl: 'hike-list.component.html'
})

export class HikeListComponent {
  hikes: Hike[];
  searchTerm: string;

  constructor(private _hikeService: HikeService) {
  }

  ngOnInit() {
    // this.hikes = this._hikeService.getHikes();
    // il faut s'abonner via subscribe pour recuperer les données
    this._hikeService.getHikesFromAPI()
      .subscribe(
        res => this.hikes = res,
        err => console.error(err.status)
      );
    console.log(this.hikes);
  }
}

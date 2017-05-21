import { Component } from '@angular/core';
import { Hike } from './hike/hike';
import { HikeService } from "./hike/hike.service";

@Component({
  moduleId: module.id, // Allows you not to have to change the path (templateUrl)
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  hikes: Hike[];

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

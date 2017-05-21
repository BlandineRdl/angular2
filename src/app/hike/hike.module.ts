import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { HikeListComponent } from "./hike-list.component";
import { HikeDetailsComponent } from "./hike-details.component";
import {HikeService} from "./hike.service";
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HikeListComponent, HikeDetailsComponent],
  exports: [],
  providers: [HikeService],
})

export class HikeModule {}

import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Hike } from './hike';

@Component({
  moduleId: module.id,
  selector: "hike-summary",
  templateUrl: "hike-summary.component.html",
  styles: [`
    a { 
      text-decoration: none 
    } 
    a:hover { 
      color: #999 
    }
    `]
  //styleUrls: ['hike-summary-component.css']
})

export class HikeSummaryComponent {
  @Input() hike: Hike;
  @Output() addhikeasfavorite = new EventEmitter<Hike>();

  toggleAsTodoHike(isAdded:boolean){
    if(isAdded) {
      this.addhikeasfavorite.emit(this.hike);
    }
  }
}

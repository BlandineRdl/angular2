import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  moduleId: module.id, // Allows you not to have to change the path (templateUrl)
  animations: [
    trigger('toggleElement', [
      state('open', style({'height': '*'})),
      state('closed', style({ 'height': '0', 'font-size': '0px'})),

      transition('closed <=> open',
        animate('1000ms ease-in')
      )
    ]),

    trigger('animateCitation', [
      transition('stateA <=> stateB', [
        animate(600, keyframes([
          style({opacity: 0.5, offset: 0}),
          style({opacity: 1, color:"#fcb514", offset: 0.5}),
          style({opacity: 0.7, offset: 0.7}),
          style({opacity: 1, offset: 1}),
        ]))
      ])
    ])
  ],
  selector: 'home',
  templateUrl: 'home.component.html',
  styles: [ '.frame {margin-bottom: 10px; padding:10px; border:5px solid #eeeeee; height:170px} .citation {font-size:20px; color:#3268ba}']
})
export class HomeComponent {
  open:boolean = false;
  toggleElement: string = "closed";

  animateCitation: string = "stateB";
  index: number = 0;

  quotes: quote[] = [
    {
      id: 0,
      text: 'aaa aaa aaa aaa aa aaa',
      author: "Toto"
    },
    {
      id: 1,
      text: 'aaa bbbbb aaa abbaabb aa abbbaa',
      author: "Tutu"
    },
    {
      id: 2,
      text: 'acccaa aaa aaccca aacca aa aaa',
      author: "Titi"
    },
  ]

  quote: quote = this.quotes[0];

  getPreviousQuote() {
    this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
    this.getSomeQuote(-1);
  }

  getNextQuote(){
    this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
    this.getSomeQuote(1);
  }

  getSomeQuote(increment: number){
    this.index = this.index + increment;

    if(this.index >= this.quotes.length && increment === -1) {
      this.index = 0;
    }

    if(this.index < 0 && increment === -1) {
      this.index = this.quotes.length -1;
    }

    this.quote = this.quotes[this.index];
  }

  log(event:any){
    console.log(event);
  }

  toggle() {
    this.open = !this.open;
    if(this.open){
      this.toggleElement = 'open';
    } else {
      this.toggleElement = 'closed';
    }
  }
}

interface quote {
  id: number;
  text: string;
  author: string;
}

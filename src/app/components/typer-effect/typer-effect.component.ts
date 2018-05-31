import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typer-effect',
  templateUrl: './typer-effect.component.html',
  styleUrls: ['./typer-effect.component.scss']
})
export class TyperEffectComponent implements OnInit {

  @Input('text') inputText: String;
  @Input('speed') inputSpeed: number;
  @Input('startAfter') inputStartAfter: number;
  text: String = '';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.typer(0, this.inputText);
    },this.inputStartAfter);
  }

  typer(i: number = 0, str: String) {
    setTimeout(() => {
      this.text = this.inputText.substring(0, i+1) + '_';
      if (i < this.inputText.length) {
        this.typer(i+1, str);
      } else {
        this.text = this.inputText;
      }
    }, this.inputSpeed);
  }

}

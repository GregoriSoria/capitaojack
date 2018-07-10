import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typer-effect',
  templateUrl: './typer-effect.component.html',
  styleUrls: ['./typer-effect.component.scss']
})
export class TyperEffectComponent implements OnInit {

  @Input('text') inputText: String;
  @Input('mobileText') inputMobileText: String;
  @Input('speed') inputSpeed: number;
  @Input('startAfter') inputStartAfter: number;
  @Input('repeat') inputRepeat: number;
  fullText: String = '';
  text: String = '';

  constructor() { }

  ngOnInit() {
    if (window.screen.width >= 768) {
      this.fullText = this.inputText;
    } else {
      this.fullText = this.inputMobileText || this.inputText;
    }
    setTimeout(() => {
      this.typer(0, this.fullText);
    },this.inputStartAfter);
  }

  typer(i: number = 0, str: String) {
    if (window.screen.width >= 768) {
      this.fullText = this.inputText;
    } else {
      this.fullText = this.inputMobileText || this.inputText;
    }
    setTimeout(() => {
      this.text = this.fullText.substring(0, i+1) + '_';
      if (i < this.fullText.length) {
        this.typer(i+1, str);
      } else {
        this.text = this.fullText;

        if (this.inputRepeat && window.screen.width >= 768) {
          setTimeout(() => {
            this.text = '';
            this.typer(0, this.fullText);
          }, this.inputRepeat);
        }

        if (window.screen.width <= 767) {
          setInterval(() => {
            this.text = this.inputMobileText || this.inputText;
          }, 500);
        }
      }
    }, this.inputSpeed);
  }

}

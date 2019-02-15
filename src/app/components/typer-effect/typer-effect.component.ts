import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-typer-effect',
  templateUrl: './typer-effect.component.html',
  styleUrls: ['./typer-effect.component.scss']
})
export class TyperEffectComponent implements OnInit, OnChanges {

  @Input('text') inputText: String;
  @Input('speed') inputSpeed: number;
  @Input('startAfter') inputStartAfter: number;
  @Input('repeat') inputRepeat: number;
  fullText: String = '';
  fullTextLength: number = 0;
  text: String = '';
  timeout: any;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: any) {
    console.log(changes);
    if (changes) {
      if (changes.inputText.currentValue || (changes.inputText.previousValue != 'Jornal, Revista e Informativo Turístico' && !changes.inputText.currentValue)) {
        clearTimeout(this.timeout);
        this.fullTextLength = 0;
        this.start(0);
      }
    }
  }

  typer(i: number = 0, str: String) {
    this.fullText = this.inputText;

    setTimeout(() => {
      console.log(this.text);
      this.fullTextLength++;
      this.text = this.fullText.substring(0, this.fullTextLength-1) + '_';
      if (this.fullTextLength-1 < this.fullText.length) {
        this.typer(this.fullTextLength, str);
      } else {
        this.text = this.fullText;
      }
    }, this.inputSpeed);
  }

  start(startAfter: number) {
    this.text = '';
    this.fullText = this.inputText;

    setTimeout(() => {
      this.typer(0, this.fullText);
    },startAfter);
  }

}

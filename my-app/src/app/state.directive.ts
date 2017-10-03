import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: number;

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {

  }

  ngOnChanges() {
    const cssClass = `state-${this.appState}`;
    let text: string;
    const elementNode = this._elementRef.nativeElement;
    switch (this.appState) {
      case 0:
          text = 'A livrer';
          break;
      case 1:
          text = 'En cours de livraison';
          break;
      case 2:
          text = 'Commande Livrée';
          break;
      default:
          console.log(this.appState);
          break;
    }

    this._renderer2.addClass(elementNode, cssClass);
    elementNode.innerHTML = text;
  }
}

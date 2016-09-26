import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'event-binding',
    template: `
        <button (click)="onclicked()">Click me!</button>
  `,
    styles: []
})
export class EventBindingComponent {

    @Output() clicked = new EventEmitter<string>();
    onclicked() {
        this.clicked.emit('It worked!');
    }
}

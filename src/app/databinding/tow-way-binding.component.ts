import {Component} from '@angular/core';

@Component({
    selector: 'tow-way-binding',
    template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.age">
  `,
    styles: []
})
export class TowWayBindingComponent {

    person = {
        name: "Jose",
        age: 43
    };

}

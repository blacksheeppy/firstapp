import {Component, Input, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'property-binding',
  template: `
     {{result}}
  `,
  styles: [],
})
export class PropertyBindingComponent {
@Input()  result: number = 0;

}

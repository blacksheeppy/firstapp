import {Component} from '@angular/core';

@Component({
    selector: 'databinding',
    templateUrl: './databinding.component.html',
    styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    stringInterpolation = 'This is string interpolation';
    numberInterpolation = 2;

    onTest() {
        return true;
    }

    onClicked(value: string) {
        alert(value);
    }

    tiles: any[] = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

    folders = ['pulbic', 'fotos', 'varios'];
}

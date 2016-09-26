import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {OtherComponent} from './other/other.component';
import {AnotherComponent} from './other/another.component';
import {PropertyBindingComponent} from './databinding/property-binding.component';
import {DatabindingComponent} from './databinding/databinding.component';
import {EventBindingComponent} from './databinding/event-binding.component';
import {TowWayBindingComponent} from './databinding/tow-way-binding.component';

import {MdButtonModule} from '@angular2-material/button';
import {MdCardModule} from '@angular2-material/card';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdListModule} from '@angular2-material/list';

@NgModule({
    declarations: [
        AppComponent,
        OtherComponent,
        AnotherComponent,
        PropertyBindingComponent,
        DatabindingComponent,
        EventBindingComponent,
        TowWayBindingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdButtonModule.forRoot(),
        MdCardModule.forRoot(),
        MdGridListModule.forRoot(),
        MdListModule.forRoot()
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
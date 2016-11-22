import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    // templateUrl: "./app.component.html"
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <app-message></app-message>
            </div>
        </div>
    </div>
    `
})
export class AppComponent {

}

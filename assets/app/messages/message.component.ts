import { Component } from '@angular/core';

@Component({
    selector: 'app-message',
    // templateUrl: "./message.component.html",
    template: `
    <article class="panel panel-default">
        <div class="panel-body">
            {{ message.content }}
        </div>
        <footer class="panel-footer">
            <div class="author">
                {{ message.author }}
            </div>
            <div class="config">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
            </div>
        </footer>
    </article>
    `,
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
        `]
})
export class MessageComponent {
    message = {
        content: 'A message',
        author: 'Brian'
    }
}

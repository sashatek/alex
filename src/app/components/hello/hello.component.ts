import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
    title = 'Alex';
    name = '';
    message = ''

;    constructor() { }

    ngOnInit(): void {
    }

    changeTitle() {
        this.title = 'SneakoAlexo';
        this.message = 'Hello ' + this.name;
        if (this.name === ''){
            this.message = 'Enter your name, Stupido!';
        }
        if (this.name.toLowerCase() === 'alex' || this.name.toLowerCase() === 'alexo'){
            this.message = 'I love you, Alexandric!';
        }
    }
}

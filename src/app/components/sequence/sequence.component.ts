import { R3TargetBinder } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sequence',
    templateUrl: './sequence.component.html',
    styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {
    sequence = 0;

    rColor=0;
    gColor=0;
    bColor=0;
    
    constructor() { }

    ngOnInit(): void {
    }

    increment() {
        this.sequence++;
    }

    decrement() {
        this.sequence--;

    }

    rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      }
    getColor():string {
        
        return this.rgbToHex(this.rColor,0,0);
    }


}

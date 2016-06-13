import {Component, Input} from 'angular2/core';

@Component({
    selector: 'iteration-color-box',
    template: `
    <div class="panel panel-default" id="iterationColorInf">
      <span> Iteration color </span>
        <svg>
          <template ngFor let-c [ngForOf]="colors" let-i="index">
            <circle [attr.cx]="colorCircleX(i)" [attr.cy]="colorCircleY(i)"
              r="10" [attr.fill]="c"></circle>
            <text [attr.x]="colorCircleX(i)-8" [attr.y]="colorCircleY(i)+4">
              {{ i + 1 }}
            </text>
          </template>
        </svg>
   </div>
    `,
    styles: [`
        .panel{ margin: 0; }
        span{ margin-left: 10px; }
      `]
})
export class IterationColorBox {
    @Input() colors: Array<String>;

    colorCircleX(colorIndex) {
        return (colorIndex % 11) * 15 + 15;
    }

    colorCircleY(colorIndex) {
        return (Math.floor(colorIndex / 11) + 1) * 25;
    }
}

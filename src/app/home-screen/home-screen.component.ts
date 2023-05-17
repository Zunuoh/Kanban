import { Component } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  template: `
  <!-- ngIf directive -->
    <h2 *ngIf="displayName; else elseBlock">
      Codevolution
    </h2>
    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>
  `,
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent {
  displayName = false;
}

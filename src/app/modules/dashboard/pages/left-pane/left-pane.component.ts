import { Component } from '@angular/core';
import { IServicesListItem } from 'src/app/shared/models/service.model';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent {
  services: IServicesListItem[] = [
    {
      id: 1,
      name: "Platform Launch",
      // image:
    },
    {
      id: 2,
      name: "Marketing Plan",
      // image:
    },
    {
      id: 3,
      name: "Roadmap",
      // image:
    },
    {
      id: 4,
      name: "Create New Board",
      // image:
    }
  ]
}








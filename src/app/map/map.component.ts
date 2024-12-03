import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  // workingdays = ["Monday","Tuesday","Wednesday","Thursday","Friday"]
  address:string = "47 Bloomingdale Ave. Akron, NY 14001 ";
  mob_no:string = "1234567890 0987654321";
  workingdays =
  [
    {
    day:"Monday",
     time:"8AM-7Pm",
    canbook:"BOOK",
  },
  {
    day:"Tuesday",
     time:"8AM-7Pm",
    canbook:"BOOK",
  },
  {
    day:"Wednesday",
     time:"8AM-7Pm",
    canbook:"BOOK",
  },
  {
    day:"Thursday",
     time:"8AM-7Pm",
    canbook:"BOOK",
  },
  {
    day:"Friday",
     time:"8AM-7Pm",
    canbook:"BOOK",
  },
  {
    day:"Saturday",
     time:"close",
    canbook:"",
  },
  {
    day:"Sunday",
     time:"close",
    canbook:"",
  },
]
}

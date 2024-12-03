// import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ani } from './animation';

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.scss',
  animations:[ani]


})
export class OurServiceComponent {


  description = {
    'background-color': 'lightgreen',
    'font-size': '0px',
    'padding': '0px',
    'transition': 'all 1s ease',  // Smooth transition for all properties
  };
  list_index:string | undefined;

  services_list = [
    { title: "The Classic Manicure", description: "The Classic Manicure", islist_text: false },
    { title: "The Signature Gel Manicure", description: "The Signature Gel Manicure", islist_text: false },
    { title: "Nail Extensions", description: "Nail Extensions", islist_text: false },
    { title: "Gel infill - Extensions only", description: "Gel infill - Extensions only", islist_text: false },
    { title: "Gel Removal", description: "Gel Removal", islist_text: false },
    { title: "The Classic Manicure", description: "The Classic Manicure", islist_text: false },
  ];

  show_list_text(li: any) {
    li.islist_text = !li.islist_text; // Toggle the visibility of description
    
    console.log(this.list_index);

    if (li.islist_text) {
      // Add smooth transition styles when description is visible
      this.description = {
        'background-color': 'lightgreen',
        'font-size': '15px',  // Change font size on hover or click
        'padding': '10px',    // Padding adjustment
        'transition': 'all 1s ease',  // Smooth transition for all properties
      };

    } else {
      // Revert the changes when description is hidden
      this.description = {
        'background-color': 'lightgreen',
        'font-size': '0px',   // Hide the text by setting font-size to 0
        'padding': '0px',     // Remove padding when description is hidden
        'transition': 'all 1s ease',  // Smooth transition for all properties
      };
    }
  }
  }



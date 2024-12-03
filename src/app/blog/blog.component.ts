import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { title } from 'node:process';
import { FooterComponent } from "../footer/footer.component";
import { ArticalComponent } from "../artical/artical.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FooterComponent, ArticalComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

   card_data = {
    data1: {
      img_link: "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/Bridal_1.jpg",
      date: "26/10/2024",
      title: "Layer Cut Styles & Prices at Naturals Salon | Find the Best Fit",
      description: "Discover stunning layer cut styles at Naturals Salon, starting from Rs. 1,000. From subtle layers to bold transformations, explore affordable options tailored to every hair type and budget. Enhance your look today..."
    },
    data2: {
      img_link: "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/Hari+Care+Salon.jpg",
      date: "24/10/2024",
      title: "Cost of Keratin Treatment and Their Benefits | Naturals Salon",
      description: "Find out how much a Keratin Treatment costs and discover its benefits for healthier, shinier hair. To visit Naturals Salon, just type 'Naturals salon near me..."
    },
    data3: {
      img_link: "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/detan.jpg",
      date: "22/09/2024",
      title: "Are You Confused Between Hair Smoothening And Hair Straightening?",
      description: "If you've been considering a hair treatment to tame your locks, you've likely come across two popular options: hair smoothening and hair straightening. While these terms are often used interchangeably..."
    },
    data4: {
      img_link: "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/frnachisee.jpg",
      date: "22/09/2024",
      title: "The Cost Of Hair Spa Treatments: 5 Ways Olaplex At Naturals Salon",
      description: "Are you looking to revitalize your hair and give it the care it deserves? In today's fast-paced world, stress, pollution, and constant styling can take a toll on our hair, leaving it dull, dry, and damaged."
    },
    data5: {
      img_link: "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/Hair+spa.jpg",
      date: "22/09/2024",
      title: "Why Naturals Salon Is The Best Salon Franchise In India",
      description: "When it comes to choosing the best salon franchise in India, Naturals Salon stands out as a leader in the industry. Known for its exceptional quality services and widespread presence across the country..."
    },
    data6: {
      img_link: "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/keratin+treatment+at+Naturals+Salon.png",
      date: "22/09/2024",
      title: "How to Remove Tan: Effective Home Remedies for Glowing Skin",
      description: "Tanning is a common skin woe that many of us face, especially during the summer months. While a sun-kissed glow can look appealing, excessive sun exposure can lead to tan lines and uneven skin tone..."
    },
    data7: {
      img_link: "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/Types+of+layer+haircuts+at+Naturals+Salon.png",
      date: "22/09/2024",
      title: "Tips To Find Best Hair Care Salon In Chennai",
      description: "With a plethora of options around us at any given moment, it can be a bit tedious to choose the best salon in a vibrant metropolis like Chennai which is rapidly growing..."
    },
    data8: {
      img_link: "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/hair+straightening.jpg",
      date: "22/09/2024",
      title: "How to Choose the Right Bridal Makeup Artist for Your Special Day?",
      description: "Your wedding day is a once-in-a-lifetime event, and every bride deserves to look and feel her absolute best. One of the key elements in achieving that perfect bridal glow is selecting the right makeup artist..."
    }
  }


}

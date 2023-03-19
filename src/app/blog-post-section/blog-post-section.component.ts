import { Component, OnInit } from '@angular/core';

interface Author {
  name: string;
  image: string;
  website: string;

}

interface BlogPost {
  title: string;
  image: string;
  author: Author;
  description: string;
  verified: boolean; //sets blog verification status
  category: string;
}

@Component({
  selector: 'app-blog-post-section',
  templateUrl: './blog-post-section.component.html',
  styleUrls: ['./blog-post-section.component.scss']
})
export class BlogPostSectionComponent implements OnInit {
  posts: BlogPost[] = [
    {
      title: 'Top 10 Travel Destinations for 2023',
      image: 'https://source.unsplash.com/random/800x600',
      category: 'Travel',
      author: {
        name: 'John Doe',
        image: 'https://source.unsplash.com/random/50x50',
        website: 'www.example.com',
      },
      description: 'Discover the most popular and stunning travel destinations for 2023! From tropical beaches to historic cities, these are the must-visit locations for your next vacation.',
      verified: true // Example of a verified post,
    },
    {
      title: 'Best Travel Gadgets for Your Next Adventure',
      image: 'https://source.unsplash.com/random/800x600?gadgets',
      category: 'Travel',
      author: {
        name: 'Jane Smith',
        image: 'https://source.unsplash.com/random/50x50?person',
        website: 'www.example.com',
      },
      description: 'Explore our top picks for travel gadgets that will make your next trip more enjoyable and convenient. From noise-canceling headphones to portable chargers, we\'ve got you covered.',
      verified: true // Example of a verified post,

    },
    {
      title: 'How to Travel on a Budget and Still Have Fun',
      image: 'https://source.unsplash.com/random/800x600?budget-travel',
      category: 'Travel',
      author: {
        name: 'Mark Taylor',
        image: 'https://source.unsplash.com/random/50x50?people',
        website: 'www.example.com',
      },
      description: 'Traveling on a budget doesn\'t have to be boring. Check out our tips for affordable and enjoyable travel experiences, from finding deals on accommodations to eating like a local.',
      verified: false // Example of a verified post,
    },
    {
      title: '7 Must-Try Street Foods Around the World',
      image: 'https://source.unsplash.com/random/800x600?street-food',
      category: 'Travel',
      author: {
        name: 'Emily Johnson',
        image: 'https://source.unsplash.com/random/50x50?woman',
        website: 'www.example.com',
      },
      description: 'Embark on a culinary adventure with these mouth-watering street foods from around the world. From savory dishes to sweet treats, these are the street foods you won\'t want to miss.',
      verified: true // Example of a verified post,
    },
    {
      title: 'Eco-Friendly Travel: Tips for Sustainable Tourism',
      image: 'https://source.unsplash.com/random/800x600?eco-travel',
      category: 'Travel',
      author: {
        name: 'Sam Brown',
        image: 'https://source.unsplash.com/random/50x50?face',
        website: 'www.example.com',
      },
      description: 'Travel responsibly with our guide to eco-friendly travel. Learn how to minimize your environmental impact while exploring the world and supporting local communities.',
      verified: false // Example of a verified post,
    },
    {
      title: 'The Ultimate Packing List for Long-Term Travel',
      image: 'https://source.unsplash.com/random/800x600?packing',
      category: 'Travel',
      author: {
        name: 'Linda Williams',
        image: 'https://source.unsplash.com/random/50x50?person',
        website: 'www.example.com',
      },
      description: 'Prepare for your long-term travel adventure with our comprehensive packing list. From essential clothing items to must-have gear, we\'ll help you pack smart and travel light.',
      verified: true // Example of a verified post,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

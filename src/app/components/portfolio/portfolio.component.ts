import { Portfolio } from './../../shared/portfolio';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Portfolio page of start framework app, that displays the portfolio',
      },
      { name: 'author', content: 'Kero' },
      { name: 'keywords', content: 'Angular, Framework, 404, not found' },
    ]);
    this.title.setTitle('Start Framework - Portfolio');
  }

  myPortfolio: Portfolio[] = [
    {
      id: 1,
      image: './assets/images/portfolio1.png',
      description: 'portfolio image description',
    },
    {
      id: 2,
      image: './assets/images/portfolio2.png',
      description: 'portfolio image description',
    },
    {
      id: 3,
      image: './assets/images/portfolio3.png',
      description: 'portfolio image description',
    },
    {
      id: 4,
      image: './assets/images/portfolio1.png',
      description: 'portfolio image description',
    },
    {
      id: 5,
      image: './assets/images/portfolio2.png',
      description: 'portfolio image description',
    },
    {
      id: 6,
      image: './assets/images/portfolio3.png',
      description: 'portfolio image description',
    },
  ];
}

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
}

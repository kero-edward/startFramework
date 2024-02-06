import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'About page of start framework app, that tell the user some information about us',
      },
      { name: 'author', content: 'Kero' },
      { name: 'keywords', content: 'Angular, Framework, About' },
    ]);
    this.title.setTitle('Start Framework - About');
  }
}

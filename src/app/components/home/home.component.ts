import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Home page of start framework app' },
      { name: 'author', content: 'Kero' },
      { name: 'keywords', content: 'Angular, Framework' },
    ]);
    this.title.setTitle('Start Framework - Home');
  }
}

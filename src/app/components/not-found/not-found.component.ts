import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Not found page of start framework app, that the user enter wrong path or page',
      },
      { name: 'author', content: 'Kero' },
      { name: 'keywords', content: 'Angular, Framework, 404, not found' },
    ]);
    this.title.setTitle('Start Framework - 404');
  }
}

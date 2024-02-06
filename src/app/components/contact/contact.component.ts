import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Contact page of start framework app, that display contact form to allow the user to send a feedback or a message.',
      },
      { name: 'author', content: 'Kero' },
      { name: 'keywords', content: 'Angular, Framework, contact' },
    ]);
    this.title.setTitle('Start Framework - Contact');
  }
}

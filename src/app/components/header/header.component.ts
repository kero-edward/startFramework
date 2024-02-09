import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isScrolling: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (scrollY >= 50) {
      this.isScrolling = true;
    } else {
      this.isScrolling = false;
    }
  }
}

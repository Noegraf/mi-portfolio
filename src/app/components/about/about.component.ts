import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    const highlights = document.querySelectorAll('.highlight');

    highlights.forEach((highlight) => {
      highlight.addEventListener('mouseenter', () => this.toggleIcon(highlight, true));
      highlight.addEventListener('mouseleave', () => this.toggleIcon(highlight, false));
    });
  }

  private toggleIcon(element: Element, activate: boolean): void {
    const iconId = element.getAttribute('data-icon');
    if (iconId) {
      const icon = document.getElementById(iconId);
      if (icon) {
        icon.classList.toggle('icon-active', activate);
      }
    }
  }
}

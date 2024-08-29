import { Component, Renderer2, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Note: Use "styleUrls" instead of "styleUrl"
})
export class HeaderComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.setupDropdownHover();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    if (window.innerWidth >= 980) {
      this.setupDropdownHover();
    }
  }

  setupDropdownHover(): void {
    if (window.innerWidth >= 980) {
      const dropdownToggles = this.el.nativeElement.querySelectorAll('.navbar .dropdown-toggle');
      dropdownToggles.forEach((toggle: HTMLElement) => {
        this.renderer.listen(toggle, 'mouseenter', () => {
          const parent = toggle.parentElement;
          this.renderer.addClass(parent, 'show');
          const dropdownMenu = parent?.querySelector('.dropdown-menu');
          this.renderer.addClass(dropdownMenu, 'show');
        });

        this.renderer.listen(toggle, 'mouseleave', () => {
          const parent = toggle.parentElement;
          this.renderer.removeClass(parent, 'show');
          const dropdownMenu = parent?.querySelector('.dropdown-menu');
          this.renderer.removeClass(dropdownMenu, 'show');
        });
      });

      const dropdownMenus = this.el.nativeElement.querySelectorAll('.navbar .dropdown-menu');
      dropdownMenus.forEach((menu: HTMLElement) => {
        this.renderer.listen(menu, 'mouseleave', () => {
          this.renderer.removeClass(menu, 'show');
        });
      });
    }
  }
}

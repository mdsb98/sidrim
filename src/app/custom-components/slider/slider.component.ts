import { AfterViewInit, Component, Inject, Renderer2, ElementRef, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

declare const M: any; // Declare Materialize globally

@Component({
  selector: 'app-slider',
  // standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'] // Corrected typo: Use "styleUrls" instead of "styleUrl"
})
export class SliderComponent implements AfterViewInit {
  constructor(
    @Inject(DOCUMENT) private document: Document, // Use injected DOCUMENT
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID for SSR checks
  ) {}

  ngAfterViewInit() {
    // Check if the platform is a browser
    if (isPlatformBrowser(this.platformId)) {
      const sliderElements = this.document.querySelectorAll('.slider'); // Use injected DOCUMENT
      M.Slider.init(sliderElements, {
        indicators: true, // Show navigation dots
        height: 500,      // Height of the slider
        duration: 300,    // Transition duration
        interval: 3000    // Time between slides
      });
    }
  }
}

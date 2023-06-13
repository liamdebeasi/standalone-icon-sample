import { Component, Input, HostBinding, inject } from '@angular/core';
import { IonIconsToken } from '../provide-icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-icon',
  template: '',
  standalone: true,
})
export class AppIcon {
  private readonly icons = inject(IonIconsToken);
  private readonly sanitizer = inject(DomSanitizer);

  @HostBinding('innerHTML') template?: SafeHtml;

  @Input() name?: string;

  constructor() {}

  ngOnInit() {
    if (!this.name) {
      return;
    }

    const toCamelCase = this.name.replace(/-./g, x=>x[1].toUpperCase())
    const findIconSvgData = this.icons.find(icon => icon[toCamelCase] !== undefined);

    if (findIconSvgData === undefined) {
      throw new Error(`Could not find icon ${this.name}. Did you pass the data to provideIcons?`);
    } else {
      // This would instead pass the SVG to the ion-icon Web Component
      this.template = this.sanitizer.bypassSecurityTrustHtml(findIconSvgData[toCamelCase]);
    }
  }
}

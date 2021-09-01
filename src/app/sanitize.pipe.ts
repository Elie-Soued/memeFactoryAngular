import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
})
export class SanitizePipe implements PipeTransform {
  constructor(private sanitize: DomSanitizer) {}

  transform(value: any): any {
    return this.sanitize.bypassSecurityTrustUrl(value);
  }
}

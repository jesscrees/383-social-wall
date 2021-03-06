import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeDate'
})
export class RelativeDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      // Need to replace hyphens with slashes for Safari to understand the date format
      value = value.replace(/-/g, '/');

      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

      // Less than 30 seconds ago will show as 'Just now'
      if (seconds < 29) {
        return 'Just now';
      }

      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };


      let counter;

      // tslint:disable-next-line: forin
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);

        if (counter > 0) {
          return counter + ' ' + i + (counter > 1 ? 's' : '') + ' ago';
        }
      }
    }
  }

}

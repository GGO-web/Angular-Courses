import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'duration'
})
export class DurationPipe implements PipeTransform {

   transform(duration: number): string {
      const hours = Math.floor(duration / 60);
      const minutes = duration - hours * 60;

      return `${hours > 0 ? hours.toString() + "h" : ""} ${String(minutes).padStart(
         2,
         '0'
      )} min`;
   }

}

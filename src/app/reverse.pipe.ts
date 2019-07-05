import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
// since the code does not work from the order I wanted it to, I had to use a reverse pipe to use it on the ng for loop to show the blog titles and suymmaries.
  transform(value: any, args?: any): any {
     return value.slice().reverse();
  }

}

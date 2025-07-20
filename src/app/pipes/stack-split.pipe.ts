import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stackSplit',
  standalone: true 
})
export class StackSplitPipe implements PipeTransform {
  transform(value: string, delimiter: string = '|'): string[] {
    if (!value) return [];
    return value.split(delimiter).map(item => item.trim());
  }
}

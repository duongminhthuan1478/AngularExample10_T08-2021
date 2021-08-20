import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examPipe'
})
export class ExamPipePipe implements PipeTransform {

  transform(value: string, params: string, year?: number): unknown {
    if(year) {
      return value + params + year;
    }
    return value + params;
    
  }

}

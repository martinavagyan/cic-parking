import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'MapValuesPipe',
})
export class MapValuesPipe implements PipeTransform {

  constructor() {}

  public transform(value: any, args?: any[]): Object[] {
    let returnArray = [];
    value.forEach((entryVal, entryKey) => {
      returnArray.push({
        key: entryKey,
        val: entryVal
      });
    });
    return returnArray;
  }
}

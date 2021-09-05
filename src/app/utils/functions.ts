import { JsonPipe } from '@angular/common';

/**
 * private arr = JSON.parse('[{"name":"AverageSpecificGravity","value":2.650000095367432,"uom":"SG"},{"name":"Brine","value":0,"uom":"KCl"},{"name":"Density","value":9.800000190734863,"uom":"ppg","temperature":{"name":"Temperature","value":120.1999969482422,"uom":"°F"}},{"name":"Gel10M","value":0,"uom":"lbs/100ft2"},{"name":"Gel10S","value":8,"uom":"lbs/100ft2"},{"name":"Gel30M","value":14,"uom":"lbs/100ft2"},{"name":"kPrime","value":0.5637032389640808,"uom":"lb*s^n/100ft2"},{"name":"KPL","value":1.011898756027222,"uom":"lb*s^n/100ft2"},{"name":"nPrime","value":0.6692962646484375},{"name":"nPrimePL","value":0.6076825857162476},{"name":"Tau0","value":7.874623775482178,"uom":"lbs/100ft2"},{"name":"PV","value":22,"uom":"cP"},{"name":"YP","value":20},{"name":"OilWaterRatio","value":0,"uom":"%"},{"name":"SaltConcentration","value":3,"uom":"%"},{"name":"Temperature","value":120.1999969482422,"uom":"°F"},{"name":"600","value":64,"uom":"RPM","unitType":"Dial Reading"},{"name":"300","value":42,"uom":"RPM","unitType":"Dial Reading"},{"name":"200","value":35,"uom":"RPM","unitType":"Dial Reading"},{"name":"100","value":26,"uom":"RPM","unitType":"Dial Reading"},{"name":"6","value":11,"uom":"RPM","unitType":"Dial Reading"},{"name":"3","value":8,"uom":"RPM","unitType":"Dial Reading"},{"name":"RheologyBeta","value":1.067845702171326,"uom":"1","unitType":"Dial Readings Property"}]');
 * this.convertArrayToObject(this.arr, 'name');
 * @param array
 * @param key
 */
export function convertArrayToObject(array: [], key): any {
  if (array && array.length && key) {
    const initialValue = {};
    return array.reduce((obj, item, index) => {
      console.log(obj);
      console.log(index);
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  }
  return null;
}

export function reduceDuplicate(array: any[]) {
  return array.reduce(
    (pre, currentItem) => {
      return !pre.some((j) => JSON.stringify(currentItem) === JSON.stringify(j))
        ? [...pre, currentItem] : pre
      } ,[]);
}

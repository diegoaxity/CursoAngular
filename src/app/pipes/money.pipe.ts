import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  transform(value: number, symbol?: string): string {
    if (typeof value !== 'number') {
      return null;
    }

    return this.currencyFormat(value, symbol);
  }

  currencyFormat(num: number, symbol: string) {
    return (symbol ? symbol : '$') + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
}

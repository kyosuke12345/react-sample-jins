export function moneyFormat(num: number): string {
  return "\xA5" + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

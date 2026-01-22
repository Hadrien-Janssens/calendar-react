/**
 *
 * @param price Give the price in cent
 * @returns The price in euros
 */
export function centsToEuros(price: number) {
  return (price / 100).toFixed(2)
}

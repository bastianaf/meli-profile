export default function currencyFormat(
    price: number,
    locale = "es-ar",
    currency = "ARS"
  ) {
    return price.toLocaleString(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
  
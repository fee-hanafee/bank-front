export default function currencyFormat(number) {
  const formatter = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "THB",
  });

  return formatter.format(number).slice(4);
}

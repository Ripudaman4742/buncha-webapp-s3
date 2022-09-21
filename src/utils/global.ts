import moment from "moment"

export const getDate = (date: number) => {
  const Date = moment(date).format("D MMMM YYYY")
  return Date
}

export function formatCurrency(pennies: number): string {
  return "$" + (pennies / 100).toFixed(2);
}

export const toTimestamp = (date: any) => {
  const dt = Date.parse(date);
  return dt;
}

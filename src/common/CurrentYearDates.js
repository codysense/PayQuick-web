const today = new Date();
const currentYear = today.getFullYear();

// Set the minimum date to January 1st of the current year
const startOfYear = new Date(currentYear, 0, 1);
// Set the maximum date to December 31st of the current year
const endOfYear = new Date(currentYear, 11, 31);

const nextYear = today.getFullYear() + 1;

const endOfNextYear = new Date(nextYear, 11, 31);

export function minDate() {
  return startOfYear.toISOString().split("T")[0];
}

export function maxDate() {
  return endOfYear.toISOString().split("T")[0];
}

export function maxNextYear() {
  return endOfNextYear.toISOString().split("T")[0];
}

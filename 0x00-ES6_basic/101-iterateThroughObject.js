export default function iterateThroughObject(reportWithIterator) {
  const employees = [...reportWithIterator]; // Spread the iterator into an array
  return employees.join(' | '); // Join employee names with a ' | ' separator
}

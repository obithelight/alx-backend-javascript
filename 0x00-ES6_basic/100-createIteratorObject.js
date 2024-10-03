export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  const employeesList = allEmployees.flat(); // Flatten the array of arrays into a single array
  return employeesList[Symbol.iterator](); // Return an iterator for the array
}

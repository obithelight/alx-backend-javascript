export default function getStudentsByLocation(array, city) {
  return array.filter((arr) => arr.location === city);
}

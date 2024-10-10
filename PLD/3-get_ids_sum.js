export default function getStudentIdsSum(array) {
  return array.reduce((acc, num) => acc + num.id, 0);
}

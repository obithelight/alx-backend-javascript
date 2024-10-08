export default function getStudentIdsSum(list) {
  return list.reduce((acc, num) => acc + num.id, 0);
}

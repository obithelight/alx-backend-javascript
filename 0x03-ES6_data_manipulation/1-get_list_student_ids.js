export default function getListStudentIds(myObj) {
  if (!Array.isArray(myObj)) {
    return [];
  }
  return myObj.map((obj) => obj.id);
}

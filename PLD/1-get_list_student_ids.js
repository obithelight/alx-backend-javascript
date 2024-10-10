export default function getListStudentIds(myObj) {
  if (Array.isArray(myObj)) {
    return myObj.map((a) => a.id);
  }
  return [];
}

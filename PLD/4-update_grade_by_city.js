export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((student) => student.location === city).map((student) => {
    const gradeObj = newGrades.find((grade) => student.id === grade.studentId);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  });
}

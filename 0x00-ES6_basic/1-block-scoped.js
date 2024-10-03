export default function taskBlock(trueOrFalse) {
  const outerTask = false;
  const outerTask2 = true;

  if (trueOrFalse) {
    // const innerTask = true;
    // const innerTask2 = false;
  }

  return [outerTask, outerTask2];
}

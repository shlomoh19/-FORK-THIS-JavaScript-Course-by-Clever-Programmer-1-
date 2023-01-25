
const max = (numbers) => {
  let result = numbers[0];
  let n;
  for (n of numbers) {
    if (n > result) {
      result = n;
    }

  }

  return result;
}
const nums = [1, 2, 9, 86856353, 98, 7556567, 86856353]
console.log(max(nums));
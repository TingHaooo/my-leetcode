// Problem 1 - Bubble sort
function bubble_sort(sequence) {
  // Write your bubble sort code here
  for (let i = 0; i < sequence.length; i++) {
    for (let j = 0; j < sequence.length - i - 1; j++) {
      if (sequence[j] > sequence[j + 1]) {
        var temp = sequence[j];
        sequence[j] = sequence[j + 1];
        sequence[j + 1] = temp;
      }
    }
  }
  return sequence;
}

console.log(bubble_sort([5, 1, 3, 2, 4])); // [1, 2, 3, 4, 5]

// assert.deepEqual(bubble_sort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);

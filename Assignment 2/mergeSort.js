function mergeSort(array) {
  // Base case: if the array has only one element, return it.
  if (array.length <= 1) {
    return array;
  }

  // Otherwise, divide the array into two halves.
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort the left and right halves.
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Manage the sorted left and right halves.
  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  // Create a new array to store the merged results.
  const result = [];

  // Iterate through the left and right arrays, adding the smaller element to the result array
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add the remaining elements from the left or right array to the result array.
  result.push(...left.slice(i));
  result.push(...right.slice(j));

  return result;
}

arr = [8, 3, 4, 12, 5, 6];

console.log(mergeSort(arr));

function mergeSort(array) {
	// exit
	if (array.length <= 1) {
		return array
	}

	// splitting
	const index = Math.floor(array.length / 2); // int
	const left = array.slice(0, index); // arr
	const right = array.slice(index); // arr

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const arr = [];

	// sorting
	while (left.length !== 0 && right.length !== 0) {
		if (left[0] <= right[0]) {
			const el = left.shift();
			arr.push(el);
		} else {
			const el = right.shift();
			arr.push(el);
		}
	}

	// merging
	const result = arr.concat(left.concat(right))

	return result;
}

const arr1 = [4,2,1,3,5,8,7];
const arr2 = [4,2];

console.log(mergeSort(arr1));

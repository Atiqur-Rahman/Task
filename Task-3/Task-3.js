var task_3 = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left, right];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return 'There are no such numbers in the list';
};
console.log(task_3([2, 7, 11, 15], 9));

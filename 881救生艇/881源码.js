/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */

// window.onload = function () {
var numRescueBoats = function (people, limit) {
    people.sort(function (a, b) {
        return a - b;
    });
    // console.log(people);
    var c = 0;
    for (var i = 0, j = people.length - 1; i <= j;) {
        // 如果最大值和最小值小于limit，则将最小值放进最大值
        if (people[j] + people[i] <= limit) {
            // 判断是否遍历结束
            // console.log(people[j] + ' ' + people[i]);
            people[j] += people[i];
            i++;
        }
        //按照最大的装
        // console.log(people[j] + "     j:" + j);
        j--;
        c++;
    }
    return c;
};
console.log(numRescueBoats([2, 49, 10, 7, 11, 41, 47, 2, 22, 6, 13, 12, 33, 18, 10, 26, 2, 6, 50, 10], 50));

// }

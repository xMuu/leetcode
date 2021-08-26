# [881. 救生艇](https://leetcode-cn.com/problems/boats-to-save-people/)

**难度中等**

第 `i` 个人的体重为 `people[i]`，每艘船可以承载的最大重量为 `limit`。

每艘船最多可同时载两人，但条件是这些人的重量之和最多为 `limit`。

返回载到每一个人所需的最小船数。(保证每个人都能被船载)。

**示例 1：**

```
输入：people = [1,2], limit = 3
输出：1
解释：1 艘船载 (1, 2)
```

**示例 2：**

```
输入：people = [3,2,2,1], limit = 3
输出：3
解释：3 艘船分别载 (1, 2), (2) 和 (3)
```

**示例 3：**

```
输入：people = [3,5,3,4], limit = 5
输出：4
解释：4 艘船分别载 (3), (3), (4), (5)
```

**提示：**

- `1 <= people.length <= 50000`
- `1 <= people[i] <= limit <= 30000`

## 分析

- 有 n 个人要搭船，每只船最多可以载两个人，但是有重量限制 `limit`，求最少需要几只船

- 注意每艘船最多只能同时载两人

  > 卡第 71 个测试点
  >
  > **[2,49,10,7,11,41,47,2,22,6,13,12,33,18,10,26,2,6,50,10] **
  >
  > **50**	

- 只需要判断一只船是否可以载两个人即可
- 先将`people`排序，采用双指针`i和j`将 `people`从两边扫，判断`people`的最大值`people[j]`和最小值`people[i]`之和是否会超出限制：
  - 如果和`<=limit`,则说明最重的人所在的船可以载两个人：最大值`people[j]`和最小值`people[i]`，然后指针转移。
  - 否则，则最重的人所在的船只能载一人。
- 从而判断装最重的人的船是否可以装两人，以此计数便是答案。

## javascript

```js
var numRescueBoats = function (people, limit) {
        people.sort(function (a, b) {
            return a - b;
        });
        var c = 0;
        for (var i = 0, j = people.length - 1; i <= j;) {
            // 如果最大值和最小值小于limit，则将最小值加进最大值
            if (people[j] + people[i] <= limit) {
                // 判断是否遍历结束
                i++;
            }
            j--;
            c++;
        }
        return c;
    };
```

## !!

JavaScript 的 sort（）是按照字符串排序，也就是按照 ASCII 码排序，不适用于数值排序，因此需要自定义sort。

```js
numbers.sort(function(a, b) {
  return a - b;
});
```

或者

```js
numbers.sort((a, b) => a - b);
```


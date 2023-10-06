/*Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.*/

const num = [1,2,3,1,1,3]
var numIdenticalPairs = function() {
    
    let good_pairs = 0;

    for(i = 0; i<num.length; i++){

        for (j = 1 + i; j < num.length; j++){
            
            if (num[i] == num[j] && i < j){
                good_pairs += 1;
            }

        }

    }

    return good_pairs;

};

const result = numIdenticalPairs();
console.log(result);
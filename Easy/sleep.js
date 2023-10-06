/* Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.It can resolve any value.

Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
*/
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}

sleep(10000).then((msg) => {
    console.log(msg);
})

let s = "Let's take LeetCode contest";
var reverseWords = function (s) {
    const myArray = s.split(" ");
    const words = myArray.map(function (values) {
        const reversedWords = values.split('').reverse().join('');
        return reversedWords;
    })

    const result = words.join(' ');
    return result;
};

console.log(reverseWords(s));
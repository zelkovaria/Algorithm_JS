function solution(phone_number) {
    let reverseNum = [...phone_number].reverse();
    for (let i = 4; i<reverseNum.length; i++ ) {
        reverseNum[i] ="*";
    }
    return reverseNum.reverse().join("");
}
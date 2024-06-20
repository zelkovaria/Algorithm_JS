function solution(a, b) {
    let innerProduct = [];
    for ( let i = 0; i<a.length; i++) {
        innerProduct.push(a[i] * b[i]);
    }
    return innerProduct.reduce((acc, cur) => acc + cur);
}
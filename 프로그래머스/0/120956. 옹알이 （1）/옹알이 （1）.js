function solution(babbling) {
    const canBabbling = [ 'aya', 'ye', 'woo', 'ma'];
    let count  = 0;
    const regex = new RegExp(`^(?:${canBabbling.join('|')})+$`);
    
    babbling.forEach((word) => {
        if (regex.test(word)) count++;
    });
    
    return count;
}